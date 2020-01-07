'use strict'
const path = require('path')
const defaultSettings = require('./src/settings/settings.js')

function resolve(dir){
	return path.join(__dirname, dir);
}

const name = defaultSettings.title || `Crystalball2020`

const port = process.env.port || process.env.npm_config_port || 1848

module.exports = {
	publicPath:'/',
	outputDir:'dist',
	assetsDir:'',
	indexPath:'index.html',
	lintOnSave: process.env.NODE_ENV !== 'production',
	devServer:{
		port: port,
    	open: true,
    	overlay: {
	      warnings: false,
	      errors: true
	    }
	},
	configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}