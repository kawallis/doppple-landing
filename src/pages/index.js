import React from "react"
import '../main.css'
import { accordian } from '../data/data'
import ScrollUpButton from "react-scroll-up-button";
import Loader from 'react-loader-spinner'

import axios from 'axios'
let cards = [
  { image: require('../icons/Custom.png'), name: 'Customization', desc: 'Seamless traveler and guide customization for both parties (not easy, but essential)' },
  { image: require('../icons/Reputation.png'), name: 'Reputation', desc: 'Reputation matters and we are dedicated to vetting our guides to make sure they give you the experience your looking for' },
  { image: require('../icons/User.png'), name: 'User Friendly', desc: 'A proper travel-based interface (lol if your still trying to find food for tonight)' },
  { image: require('../icons/Group.png'), name: 'Recommendation System', desc: 'A recommendation system customized to places only you’ll like to experience' },
]



export default class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      openIndex: null,
      subscribed: false,
      email: '',
      emailError: false,
      loading: false
    }
  }

  handleAccordian = (i) => {
    if(this.state.openIndex === i) {
      this.setState({
        openIndex: null
      })
    } else {
      this.setState({
        openIndex: i
      })
    }
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
      emailError: false
    })
  }

  handleSubscribed = () => {
    this.setState({
      loading:true,
    })

    axios.post('https://us-central1-travel-e63f1.cloudfunctions.net/subscribe', {
      email: this.state.email
    })
    .then((res) => {
      if(res.data.ok) {
        this.setState({
          subscribed: true,
          email: null,
          loading: false
        })
      } else {
        this.setState({
          emailError: true,
          loading: false
        })
      }    })
    .catch(error => {
      this.setState({
        emailError: true,
        loading: false
      })
    });
  }

  render() {
    let Stuff = null
    // console.log(window)
    // if(window) {
    //   Stuff = <Drift appId="6ha4ky27vyau" />
    // }
    return (
      <div className="">
        <div className="hero-bg h-screen flex flex-col justify-around relative">
          <div className="flex flex-row items-center lg:mx-24 p-3 absolute pin-t mt-3">
            <img 
              className="h-8"
              src={require('../icons/logo.png')} alt="" />
            <h1 className="text-white font-logo font-medium">doppple</h1>
          </div>
          

          <div className="lg:w-2/5 md:w-2/5 sm:w-full lg:mx-24 p-3">
            <h1 className="text-5xl text-white my-12">Locals Know Best</h1>
            <p className="text-white my-12 font-light leading-loose">Get direct access to locals for local-knowledege travel tips with simple, secure, and fast messaging, available on phones all over the world.</p>
            {this.state.subscribed && <h1 className="text-5xl text-white my-12">Thanks For Subscribing!</h1>}
            {!this.state.subscribed && !this.state.loading && <div className="flex items-center w-full my-12">
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleEmail}
                placeholder="traveler@github.com"
                className="flex-1 appearance-none p-6 rounded-l shadow  text-grey-darkest focus:outline-none skirt" />
              <button
                type="submit"
                onClick={this.handleSubscribed}
                className="appearance-none p-6 bg-purple-darker text-white text-base tracking-wide uppercase rounded-r shadow hover:bg-purple-darkest skirt">
                Subscribe</button>
            </div>}
            {this.state.loading && <Loader type="ThreeDots" color="white" height={80} width={80} />}
            {this.state.emailError && 
              <div className="bg-red-lightest border border-red-light text-red-dark px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">Please check your email is correct and are connected to internet</span>
              </div>
            }

          </div>

          <img 
            className="absolute lg:block md:hidden sm:hidden xl:block phone"
            style={{height: '110vh', top: '250px',
            right: '38px'}}
            src={require('../icons/yooo.png')} alt="" />
        </div>

        <div className="z-10 bg-white min-h-screen flex items-center flex-col justify-center py-12 relative">
          <div className="w-3/5">
            <h3 className="tracking-normal leading-loose">Have you been ripped off by tourist traps, bad reviews, or simply not knowing where to go while in a new city? </h3>
            <p className="my-6 font-light tracking-normal leading-loose text-lg">Give us your email and we’ll let you know when Doppple is ready!</p>
            <h3 className="tracking-normal leading-loose">Do you go through an endless amount of lists with everything having five star ratings and can’t decide what to do? </h3>
            <p className="my-6 font-light tracking-normal leading-loose text-lg">This is the sort of thing that current apps just don't care much about and to make things worse the remaining tools like Yelp and Google don't give people recommendations based on their personality or preferences.</p>
            <h3 className="tracking-normal leading-loose">Have you ever gone clubbing with your Aunt Stacy? Or gone to that weird dive bar your friend is strangley obsessed with? </h3>
            <p className="my-6 font-light tracking-normal leading-loose text-lg">Not Cool and since you don’t share things in common with either of them their reviews shouldn’t matter to you and we’re building Doppple to fix this problem.</p>
          </div>
        </div>

        <div className="bg-purple flex flex-col justify-center py-24">
          <h1
            style={{ paddingLeft: '10%' }}
            className="text-white font-light my-12">Primary Concerns</h1>
          <div className="flex flex-wrap justify-center">
            {cards.map((card, i) => {
              return (
                <div key={i} className="flex flex-row flex-wrap lg:w-2/5 md:w-2/5 sm:w-4/5 my-6 px-6 dope">
                  <div className="w-1/5">
                  <img className="h-12 mr-3" src={card.image} />
                  </div>
                  <div className="w-4/5">
                    <h2 className="text-white font-light">{card.name}</h2>
                    <p className="text-white font-light mt-3 leading-normal">{card.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="min-h-screen bg-purple-darker px-6 py-24">
          <div className="flex justify-center flex-col items-center">
          <h1 className="text-white my-24 w-3/4">Frequently asked questions</h1>

          {accordian.map((item, i) => {
            let text = '+'
            if(this.state.openIndex === i) text = '-'
            return (
              <div 
                key={i}
                onClick={() => this.handleAccordian(i)} 
                className="border border-indigo mb-6 p-12 cursor-pointer hover:bg-purple-darkest
                  w-3/4 car
                ">
                <div className="flex flex-row justify-between items-center">
                  <h1 className="carfont all:text-lg sm:text-lg  md:text-2xl lg:text-4xl text-white">{item.title}</h1>
                  <h1 className="text-white">{text}</h1>
                </div>
                {this.state.openIndex === i && 
                 <p
                 className="text-purple-lighter mt-3 text-lg font-light leading-normal"
                 >{item.desc}</p> 
                }
              </div>
            )
          })}
          </div>
        </div>
        {/* <ScrollUpButton
          StopPosition={0}
          TransitionBtnPosition={150}
          EasingType='easeOutCubic'
          AnimationDuration={500}
          ContainerClassName='ScrollUpButton__Container arrow dope shadow bg-purple-darker rounded '
          TransitionClassName='ScrollUpButton__Toggled'
          style={{ 
             backgroundColor: 'none',
          }}
          ToggledStyle={{}}
        /> */}

      </div>

    )
  }
}