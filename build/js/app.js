(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Memory(pairsPicked) {
  this.pairs = pairsPicked ;
}

var clicks = 0;
var firstChoice;
var secondChoice;

var match = 0;
var backcard = "img/back.png";

var faces = [];
  faces[0] = 'img/jackSpade.png';
  faces[1] = 'img/aceDiamond.png';
  faces[2] = 'img/queenDiamond.png';
  faces[3] = 'img/kingSpade.png';
  faces[4] = 'img/queenDiamond.png';
  faces[5] = 'img/kingDiamond.png';
  faces[6] = 'img/aceSpade.png';
  faces[7] = 'img/aceDiamond.png';
  faces[8] = 'img/aceSpade.png';
  faces[9] = 'img/jackSpade.png';
  faces[10] = 'img/jackDiamond.png';
  faces[11] = 'img/queenDiamond.png';
  faces[12] = 'img/kingDiamond.png';
  faces[13] = 'img/jackDiamond.png';
  faces[14] = 'img/kingSpade.png';
  faces[15] = 'img/queenSpade.png';


function choose(card) {
  if (clicks == 0) {
    return;
  }
  if (clicks == 0) {
    firstChoice = card;
    document.images[card].src = faces[card];
    clicks = 1;
  } else {
    clicks = 2;
    secondChoice = card;
    document.images[card].src = faces[card];
  }
}

function check() {
  clicks = 0;
  if (faces[secondChoice] == faces[firstChoice]) {
    match++;
    document.getElementById('matches').innerhtml = match;
  } else {
    document.images[firstChoice].src = backcard;
    document.images[secondChoice].src = backcard;
    return;

  }
}


exports.memoryModule = Memory;

},{}],2:[function(require,module,exports){
var Memory = require('./../js/memory.js').memoryModule;

$(document).ready(function() {
  $('.input-memory').submit(function(event) {
    event.preventDefault();
  });
});

},{"./../js/memory.js":1}]},{},[2]);
