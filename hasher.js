#!/usr/bin/env node

"use strict";

var path = require("path");
var fs = require("fs");
var crypto = require('crypto');
var clipboardy = require('clipboardy');

var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help",],
  string: ["file","algo",],
  default: {
    "algo": "md5"
  }
});

if (args.help) {
  printHelp();
} else if (args.file) {
  fs.readFile(path.resolve(args.file), function(err, contents) {
  if (err) error(err.toString());
    else generateHash(contents.toString());
  });
} else {
  generateHash(clipboardy.readSync());
}

function printHelp() {
  console.log("hasher usage:");
  console.log("Provides a hash of file contents, or clipboard contents if no file specified.");
  console.log("");
  console.log("--help                      print this help");
  console.log("--file={FILENAME}           get hash of {FILENAME}");
  console.log("--algo={ALGORITHM}          use {ALGORITHM} to generate hash, e.g. md5 (default), sha1");
  console.log("");
  console.log("");
}

function error(err, showHelp = false) {
  process.exitCode = 1;
  console.error(err);
  if (showHelp) {
    console.log("");
    printHelp();
  }
}

function generateHash(text) {
  let hash = crypto.createHash(args.algo).update(text).digest('hex');
  clipboardy.writeSync(hash);
  process.stdout.write(hash + "\n");
  process.stdout.write("Copied to clipboard\n");
}
