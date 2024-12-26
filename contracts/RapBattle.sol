
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Interface for Soundlink contract
interface Soundlink {
    struct Beat {
        uint id;
        string title;
        string description;
        address creator;
        uint price;
        bool isActive;
        // Add other relevant beat properties
    }
    
    function getSingleBeat(uint beatId) external view returns (Beat memory);
}

contract RapBattle {
    struct Participant {
        string name;
        address wallet;
        uint votes;
    }

    struct Battle {
        uint id;
        string name;
        uint date;
        uint prizePool;
        bool winnerDeclared;
        uint participantCount;
        Participant[] participants; // Array for iteration
        uint[] beats; // Array of beat IDs associated with the battle
        mapping(address => bool) hasVoted;
        mapping(address => bool) isRegistered;
    }

    address public owner;
    uint public battleCount;
    Soundlink public soundlink;
    mapping(uint => Battle) public battles;

    event BattleCreated(uint id, string name, uint date, uint[] beats);
    event ParticipantRegistered(uint battleId, string name, address wallet);
    event Voted(uint battleId, string name, address voter);
    event WinnerDeclared(uint battleId, string name, uint votes, address winnerAddress);
    event PrizeDistributed(uint battleId, uint prizeAmount, address winner);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this");
        _;
    }

    modifier validBattle(uint battleId) {
        require(battleId > 0 && battleId <= battleCount, "Invalid battle ID");
        _;
    }

    constructor(address soundlinkAddress) {
        owner = msg.sender;
        soundlink = Soundlink(soundlinkAddress);
    }

    function createBattle(
        string memory name,
        uint date,
        uint[] memory beatIds
    ) public onlyOwner {
        battleCount++;
        Battle storage newBattle = battles[battleCount];
        newBattle.id = battleCount;
        newBattle.name = name;
        newBattle.date = date;
        newBattle.beats = beatIds; // Associate beats with the battle

        emit BattleCreated(battleCount, name, date, beatIds);
    }

    function registerParticipant(uint battleId, string memory name) 
        public 
        validBattle(battleId) 
    {
        Battle storage battle = battles[battleId];
        require(!battle.winnerDeclared, "Registration is closed, winner declared");
        require(!battle.isRegistered[msg.sender], "You are already registered");

        battle.isRegistered[msg.sender] = true;
        battle.participants.push(Participant({
            name: name,
            wallet: msg.sender,
            votes: 0
        }));

        battle.participantCount++;

        emit ParticipantRegistered(battleId, name, msg.sender);
    }

    function vote(uint battleId, uint participantIndex) 
        public 
        validBattle(battleId) 
    {
        Battle storage battle = battles[battleId];
        require(!battle.winnerDeclared, "Voting is closed, winner declared");
        require(!battle.hasVoted[msg.sender], "You have already voted");
        require(participantIndex < battle.participants.length, "Invalid participant index");

        battle.hasVoted[msg.sender] = true;
        battle.participants[participantIndex].votes++;

        emit Voted(battleId, battle.participants[participantIndex].name, msg.sender);
    }

    function declareWinner(uint battleId) 
        public 
        onlyOwner 
        validBattle(battleId) 
    {
        Battle storage battle = battles[battleId];
        require(!battle.winnerDeclared, "Winner already declared");

        uint highestVotes = 0;
        uint winnerIndex = 0;

        for (uint i = 0; i < battle.participants.length; i++) {
            if (battle.participants[i].votes > highestVotes) {
                highestVotes = battle.participants[i].votes;
                winnerIndex = i;
            }
        }

        require(highestVotes > 0, "No winner");

        Participant memory winner = battle.participants[winnerIndex];

        emit WinnerDeclared(battleId, winner.name, winner.votes, winner.wallet);

        // Distribute the prize automatically
        if (battle.prizePool > 0) {
            (bool sent, ) = winner.wallet.call{value: battle.prizePool}("");
            require(sent, "Failed to send prize to winner");
            emit PrizeDistributed(battleId, battle.prizePool, winner.wallet);
            battle.prizePool = 0;
        }

        // Mark the winner as declared
        battle.winnerDeclared = true;
    }

    function addPrize(uint battleId) public payable validBattle(battleId) {
        Battle storage battle = battles[battleId];
        require(!battle.winnerDeclared, "Cannot add prize, winner already declared");
        battle.prizePool += msg.value;
    }

    function getBattleBeats(uint battleId) 
        public 
        view 
        validBattle(battleId) 
        returns (Soundlink.Beat[] memory) 
    {
        Battle storage battle = battles[battleId];
        uint beatCount = battle.beats.length;

        Soundlink.Beat[] memory battleBeats = new Soundlink.Beat[](beatCount);
        for (uint i = 0; i < beatCount; i++) {
            battleBeats[i] = soundlink.getSingleBeat(battle.beats[i]);
        }
        return battleBeats;
    }

    function getParticipant(uint battleId, uint participantIndex) 
        public 
        view 
        validBattle(battleId) 
        returns (Participant memory) 
    {
        Battle storage battle = battles[battleId];
        require(participantIndex < battle.participants.length, "Invalid participant index");
        return battle.participants[participantIndex];
    }

    function getBattlePrizePool(uint battleId) 
        public 
        view 
        validBattle(battleId) 
        returns (uint) 
    {
        return battles[battleId].prizePool;
    }

    function getVotes(uint battleId, uint participantIndex) 
        public 
        view 
        validBattle(battleId) 
        returns (uint) 
    {
        Battle storage battle = battles[battleId];
        require(participantIndex < battle.participants.length, "Invalid participant index");
        return battle.participants[participantIndex].votes;
    }
}