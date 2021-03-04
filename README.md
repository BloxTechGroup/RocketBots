# RocketBots [![Version](https://img.shields.io/badge/version-1.0.3-brightgreen)](https://rocketapps.bloxtech.tech)

Use the RocketBots (Roblox API) through your RocketApps account! We take care of maintaining your Cookie & storing it in a secure way. No more “Damn, I accidentally put my Glitch project on public!”

## Install
`npm install rocketbots`

## Usage

### Getting your team ID
1. Head to [rocketapps.bloxtech.tech](https://rocketapps.bloxtech.tech).
2. Sign up (or login) for an account.
3. Create a team (Make sure to input the right Roblox group ID here, as this is the group ID that the module will use.)
4. Once the team is created, press "manage" next to your team.
5. Now head to the "integrations" tab.
6. Press "Link Bot" button.
7. In the input field, enter the cookie of your Robot and press the green "next" button.
8. Confirm that we are linking the correct Roblox account.
9. The page will now reload. Head to the "integrations" tab once again.
10. On the bottom it will say "RocketApps also allows you to use your bots through our API. View the api here". Press the "here".
11. You'll now be redirected to our API documentation. Head to the "settings" tab.
12. Copy your team / loader ID here :-)

### Requiring the module
```js
const RocketBots = require('rocketbots');
```
(Make sure to run `npm install rocketbots` first! Else this will not work.)

### Making a bot instance
```js
const Bot = new RocketBots("YOUR_TEAM_ID_HERE")
```

### Using a function
```js
Bot.info().then((botInfo) => {
  console.log(botInfo);
});
```

### Using a function (async)
```js
const botInfo = await Bot.info();
console.log(botInfo);
```

## Functions (and what they return)
<details>
  <summary>Click to expand.</summary>
  
  ### .info()
  ```js
  {
    id: '12345', // Bot Roblox id
    name: 'roblox', // Bot Roblox username
    created: '2021-03-01T21:51:27.097Z'
  }
  ```

  ### .getJoinRequests()
  ```js
  [
    {
        requester: {
            userId: 1234,
            username: 'roblox',
            displayName: 'roblox'
        },
        created: "2021-03-03T17:45:02.75Z"
    },
  ]
  ```

  ### .approveJoinRequest(userId)
  ```js
  {
      success: true,
      response: "Successfully accepted users join request."
  }
  ```

  ### .declineJoinRequest(userId)
  ```js
  {
      success: true,
      response: "Successfully declined user from join requests."
  }
  ```

  ### .shout(message)
  ```js
  {
      success: true,
      response: "Successfully shouted to group."
  }
  ```

  ### .messageUser(userId,subject,message)
  ```js
  {
      success: true,
      response: "Successfully sent message to user."
  }
  ```

  ### .messageUser(userId,subject,message)
  ```js
  {
      success: true,
      response: "Successfully sent message to user."
  }
  ```

  ### .rankInGroup(userId,rankId)
  ```js
  {
      success: true,
      response: "Successfully ranked user in group."
  }
  ```
  
   ### .demote(userId,groupID)
  ```js
  {
      success: true,
      response: "Successfully ranked user in group."
  }
  ```
 
   ### .promote(userId,groupID)
  ```js
  {
      success: true,
      response: "Successfully ranked user in group."
  }
  ```

  ### .exile(userId)
  ```js
  {
      success: true,
      response: "Successfully exiled user from group."
  }
  ```

</details>

## Support

You can join our [Discord server](https://discord.gg/6ybaSHpFP3) and open a ticket for support.

### Credi
Credit to WHOOOP#0001 for promote and demote
