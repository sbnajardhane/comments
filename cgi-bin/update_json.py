#! /usr/bin/python  

import cgi, cgitb
import json
import os

print "Content-type: text/html\n\n"	
# print "Hello, World."

def get_post_data():
	form = cgi.FieldStorage()
	index = form['index'].value
	index = int(index)
	text = form['text'].value
	# print text
	return (index, text)


def update_json(index, text):
	filename = "../description.json"

	try:
		inputFile = open(filename, "r")
		print type(index)
		inputData = json.load(inputFile)
		 
		inputData["desc"][index] = text
		print inputData["desc"][index]
		# os.remove(filename)

		inputFile = open(filename, "w")
		json.dump(inputData, inputFile)
	except IOError as e:
		print "I/O error({0}): {1}". format(e.errno, e.strerror)
		exit()
	except ValueError:
		print "JSON format is incorrect. Please correct and try again!"
		exit()
	
	
	
	# json.dump(inputData, inputData)


(index, text) = get_post_data()
# print index
# print text
update_json(index, text)
# get_post_data()