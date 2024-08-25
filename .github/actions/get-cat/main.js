const axios = require('axios')
const core = require('@actions/core')
const exec = require('@actions/exec')
const github = require('@actions/github')

async function get_cat(){
    const response = await axios({ method: 'get', url: 'https://catfact.ninja/fact' }); 
    core.notice(response.data.fact)
}

get_cat()