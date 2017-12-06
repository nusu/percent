#!/usr/bin/env node
'use strict';

const program = require('commander');
const chalk = require('chalk');

program
	.version('1.0.0')
	.description('yüzde bul, buldur');


program
	.command('of')
	.description('% of X')
	.option('-p, --percent <percent>', 'percent')
	.option('-t, --target <target>', 'target number')
	.action(function(percent, target){
		console.log(`${chalk.yellow(target)} sayısının %${chalk.cyan(percent)}'si = ${chalk.green((target / 100) * percent)}'dir`);
	});

program
	.command('to')
	.description('A rakamının B rakamının yüzde kaçı olduğunu bul')
	.option('-f, --first <first>', 'first')
	.option('-t, --target <target>', 'target number')
	.action(function(first, target){
		console.log(`${chalk.yellow(first)} rakamı ${chalk.cyan(target)} rakamının %${chalk.green( (100 * first) / target) }dır.`);
	});

program.parse(process.argv);

let found = false;
program.args.forEach(function(arg){
	if (arg instanceof program.Command )
		found = true;
})
if (!found)
	program.help();
