const { createQuest, getQuests } = require('../handlers/quest');
const quests = require('express').Router();

quests.get('/', getQuests);
quests.post('/', createQuest);

module.exports = quests;
