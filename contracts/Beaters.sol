// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Soundlink is ERC721, ERC721URIStorage {
    address public owner;
    uint256 private _nextTokenId;
    uint256 private _beatId;
    uint256 private _platformFee; // platform fee in percentage

    enum Role {
        none,
        producer,
        collector
    }
    // [1, "ghhjjkk", ["ghjj", "ghhj"], [1, 2, 3], [4, 5, 6]]

    struct Profile {
        Role role;
        string farcaster_id;
        string[] genres;
        uint256[] beatsPurchased;
        uint256[] beatsUploaded;
    }

    struct Beat {
        uint256 beat_id;
        string beat_uri;
        string cover_uri;
        string beat_title;
        string genre;
        string farcaster_id;
        address owner;
        uint256 default_price;
        uint256 upload_time;
    }

    mapping(address => Profile) beaters;
    mapping(uint256 => Beat) beats;

    modifier onlyAdmin() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    event ProfileCreated(address indexed user, Role role, string farcaster_id);
    event BeatUploaded(
        uint256 indexed beatId,
        address indexed owner,
        string beat_uri,
        string cover_uri,
        string beat_title,
        string genre,
        uint256 default_price
    );
    event BeatPurchased(
        uint256 indexed beatId,
        address indexed buyer,
        address indexed seller,
        uint256 price,
        uint256 fee
    );

    constructor() ERC721("Beaters", "BTS") {
        _platformFee = 5;
        owner = msg.sender;
    }

    function createProfile(Profile memory _profile) external {
        require(msg.sender != address(0), "Invalid address");
        require(
            beaters[msg.sender].role == Role.none,
            "Profile already exists"
        );
        beaters[msg.sender] = Profile(
            _profile.role,
            _profile.farcaster_id,
            _profile.genres,
            new uint256[](0),
            new uint256[](0)
        );

        emit ProfileCreated(msg.sender, _profile.role, _profile.farcaster_id);
    }

    function uploadBeat(
        string memory _uri,
        string memory _cover_uri,
        string memory _beat_title,
        string memory _genre,
        uint256 beat_price
    ) external {
        Profile storage profile = beaters[msg.sender];

        require(profile.role == Role.producer, "No Profile on Beater");
        require(beat_price > 0, "Please enter a valid price");

        uint256 tokenId = _nextTokenId++;
        uint256 beatId = _beatId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, _uri);

        profile.beatsUploaded.push(beatId);
        beats[beatId] = Beat(
            beatId,
            _uri,
            _cover_uri,
            _beat_title,
            _genre,
            profile.farcaster_id,
            msg.sender,
            beat_price,
            block.timestamp
        );

        emit BeatUploaded(
            beatId,
            msg.sender,
            _uri,
            _cover_uri,
            _beat_title,
            _genre,
            beat_price
        );
    }

    function purchaseBeat(uint256 beatId) external payable {
        require(beatId < _beatId, "Beat does not exist");
        Beat storage beat = beats[beatId];
        require(msg.sender != beat.owner, "you are the owner");

        // Ensure sufficient payment
        require(msg.value >= beat.default_price, "Insufficient payment");

        uint256 fee = (msg.value * _platformFee) / 100;
        uint256 sellerAmount = msg.value - fee;

        // Check for reentrancy attack
        require(
            payable(address(this)).balance >= fee + sellerAmount,
            "Insufficient contract balance"
        );

        // Transfer the fee to the owner
        payable(owner).transfer(fee);

        // Transfer the seller amount to the beat owner
        payable(beat.owner).transfer(sellerAmount);

        Profile storage buyerProfile = beaters[msg.sender]; // Assuming 'beaters' is misspelled as 'beaterProfiles'
        if (buyerProfile.role == Role.none) {
            buyerProfile.role = Role.collector;
        }
        buyerProfile.beatsPurchased.push(beatId);

        // Transfer the token representing the beat to the buyer
        _transfer(beat.owner, msg.sender, beatId);

        // Update the beat owner
        beat.owner = msg.sender;

        emit BeatPurchased(beatId, msg.sender, beat.owner, msg.value, fee);
    }

    function getAllBeats() external view returns (Beat[] memory) {
        Beat[] memory allBeats = new Beat[](_beatId);
        for (uint256 i = 0; i < _beatId; i++) {
            allBeats[i] = beats[i];
        }
        return allBeats;
    }

    function getSingleBeat(uint256 beatId) external view returns (Beat memory) {
        require(beatId < _beatId, "Beat does not exist");
        return beats[beatId];
    }

    function updateUserProfile(Profile memory _profile) public {
        Profile storage profile = beaters[msg.sender];
        require(profile.role != Role.none, "Profile does not exist");

        profile.role = _profile.role;
        profile.farcaster_id = _profile.farcaster_id;
        profile.genres = _profile.genres;
        // beatsPurchased and beatsUploaded should not be modified here
    }

    function getUserProfile(address user) public view returns (Profile memory) {
        require(beaters[user].role != Role.none, "Profile does not exist");
        return beaters[user];
    }

    function setPlatformFee(uint256 fee) external onlyAdmin {
        require(fee >= 0 && fee <= 100, "Invalid platform fee");
        _platformFee = fee;
    }

    function withdrawEth() external onlyAdmin {
        payable(owner).transfer(address(this).balance);
    }


    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
