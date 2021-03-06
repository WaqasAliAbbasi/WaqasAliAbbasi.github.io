---
title: "Egalex"
date: '2018-01-25T12:00:00.000+08:00'
excerpt: "A decentralized pro-bono network for law firms."
header:
  teaser: app.png
sidebar:
  - title: "Egalex"
    image: egalexlogo.png
    image_alt: "Logo"
    text: A decentralized pro-bono network for law firms.
gallery:
  - url: flowchart.png
    image_path: flowchart.png
    alt: "Flowchart"
  - url: frontend.png
    image_path: frontend.png
    alt: "Front-end"
  - url: app.png
    image_path: app.png
    alt: "React Native App Screens"
---

A decentralized pro-bono network for law firms.

{% include gallery caption="Egalex" %}

## Links

* [GitHub](https://github.com/piy0999/Egalex)

## About

Law firms already do pro bono work but many times they find it hard to find cases or underprivileged people find it hard to reach these firms.

We wanted to connect these two but in a way which is convenient and easy for both without us being the middlemen. The idea was to create a healthy competition between law firms. Like a sports competition but for CSR. Every two months rankings would be updated to see who's doing the most CSR work. A system like this requires somebody to organize all this so it's expensive time and money wise. We thought we can use automation to organize this and blockchain to make this cheap and decentralized.

All the law firm has to do is to just keep up a node in a private network of law firms. Any law firm can add or take cases to/from the network based on their demand/supply through a convenient web app.

Moreover, underprivileged people can also add their case to the network through a mobile app in which they just have to voice record their story.

To process this audio, we created an <b> in-house speech-to-text model </b>. After transcribing the story we push the person's ask for help to the network with a summary of his story and contact details. We did it for English to English but this could work for any language so it's really useful for people like refugees.

## Business Model

1.  A server maintained by Egalex Foundation which hosts the in-house machine learning model and transaction node to access the network (private multichain or public ethereum or private ethereum)
2.  iOS and Play store fees paid by Egalex Foundation
3.  Egalex Foundation runs on charity on the model of Wikipedia
4.  In addition to Egalex foundation, anyone can contribute to open-source machine learning, network, app and front-end code.
5.  Each node kept up by the law firm by themselves. If they want help, they can pay the Egalex foundation for maintenance.

## Presentation

See it [here](https://docs.google.com/presentation/d/1lch0c4M8HD_gC8ujHhFJo9GHNhCdkoMgXqFEhRNcIxs/edit?usp=sharing).

## Tech Stack

### Lawyer Front-end

<img src= "https://github.com/piy0999/Egalex/blob/master/images/frontend.png" height="400" width="700">

A web app for law firms made with react to see and accept cases.

### Client App

<img src= "https://github.com/piy0999/Egalex/blob/master/images/app.png">

A react native hybrid app which helps register new cases. Has a sound recording feature which is sent to a Node.js backend and transcribed to text via an in-house LSTM model.

Run `npm start` inside app folder to run it via Expo or Android/iOS simulator.

### Machine Learning

An LSTM machine learning model based on Keras to transcribe speech to text. The whole model has been developed completely <b> IN HOUSE </b> which saves costs and has learning from extremely large open datasets.

### Private Blockchain Network

#### 1. Multichain

A private network is formed via multichain. Setup.sh scripts have been prepared which can help setup a new law firm network in minutes.

1.  To create first node (establish a new network): `curl -s https://raw.githubusercontent.com/piy0999/Egalex/master/firm_node/multichain/setup_master.sh | bash /dev/stdin`
2.  To join existing network, get IP address and port of any node in existing network, run the following command and ask the network to approve connect request. `curl -s https://raw.githubusercontent.com/piy0999/Egalex/master/firm_node/multichain/setup_node.sh | bash /dev/stdin {IP:PORT}`

The multichain blockchain stores the data for the cases in an encoded hexadecimal data stream format on the blockchain which is rendered on the frontend through our python flask restful API.

#### 2. Ethereum

In case you don't want to setup a private network and want to instead use ethereum, there is a ethereum/solidity solution too.

A fallback node server has also been setup for the app if it can't access the ethereum network (Rinkeby for testing) itself. The fallback server calls the Case Factory on Rinkeby Network and creates a new case with details sent by the mobile app. This node server's gas costs can be paid via charity.

Inside ethereum folder, insert 12-word mnemonic and infura node link in `./ethereum/web3.js` and then Run `./node_modules/babel-cli/bin/babel-node.js --presets node6 ./server.js`
