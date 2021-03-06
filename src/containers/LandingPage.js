import React from 'react';
import "../styles/LandingPage.css";
import logo from "../assets/nest-128.png"

//This file is for use in devlopment envoirnment only.
//It generates the HTML and CSS codes for the landing page which is later
//placed in ./landing-page directory.

function LandingPage(props) {
	return(
		<div class="wrap">
			{/* ---------Start of Banner section--------- */}
			<section class="banner">
				<div class="banner-left">
				 <img src="https://i.imgur.com/JVWC1el.png" alt=""/>
				</div>
				<div class="banner-right">
					<img src={logo} alt=""/>
					<h1>Nest Tab</h1>
					<p class="tagline">Your new home in Chrome!</p>
					<div class="btn-wrap">
						<div class="btn download-btn">
							<a href="https://github.com/faahim/nest-tab/raw/master/package/nest-tab.crx">Download</a>
						</div>
						<div class="btn demo-btn">
							<a href="https://faahim.github.io/nest-tab/demo/">Demo</a>
						</div>
					</div>
				</div>
				<div class="description">
					<p>Nest Tab is an extension for Chrome that replaces your new tab with a clean looking page and provide tools to help you stay productive.</p>
					<p class="notice">* Demo is optimized for desktop browsers only</p>
				</div>
			</section>
			{/* ---------End of Banner section--------- */}

			{/* ---------Start of Feature section--------- */}
			<section class="feature-section">
				<h2>Features</h2>
				<div class="feature feature-item">
					<i class="material-icons">format_list_bulleted</i>
					<h3>Todo List</h3>
					<p>Add your tasks, Mark them as done/undone, save detailed information, filter the list, see how long you've worked on a task...Everything you might expect from a Todo app is there at your fingertips!</p>
				</div>
				<div class="feature feature-item">
					<i class="material-icons">timer</i>
					<h3>Pomodoro Timer</h3>
					<p>A timer and a Todo list by their own is a powerful tool for productivity. But their real power unleashes when they work together. Track time working on tasks from your Todo list. Pomodo will add time metrics to your Todo items automattically!</p>
				</div>
				<div class="feature feature-item">
					<i class="material-icons">move_to_inbox</i>
					<h3>Shelf</h3>
					<p>No more lost links! Dump all the links you want to take a look at later in your Shelf! Shelf will try to fetch the metadata like title and description of the url to keep them organised. And check them off you're done.</p>
				</div>
				<div class="feature feature-item">
					<i class="material-icons">bookmark</i>
					<h3>Bookmark</h3>
					<p>Acess all your bookmarks without leaving your current window. Bookmarks list your all of your bookmarks in a single tree stucture, with all your nested folders!</p>
				</div>
				<div class="feature feature-item">
					<i class="material-icons">cloud</i>
					<h3>Weather Information</h3>
					<p>Get just the right amount of weather information about your cuurent location. You're never gonna need that wind direction thing, so we're not going to distract you with that.</p>
				</div>
				<div class="feature feature-item">
					<i class="material-icons">wallpaper</i>
					<h3>Dynamic Wallpaper</h3>
					<p>Your home is always new and shiny with specially curated collection of images. They gets updated automattically every hour if you keep the tab open. Alternatively, you can change image any time!</p>
				</div>
				<div class="get-involved">
					<p>Have a feature idea? Or, Want to get involved in the development? Nest Tab is open source!</p>
					<a href="https://github.com/faahim/nest-tab">Find Nest Tab on GitHub</a>
				</div>
			</section>
			{/* ---------End of Feature section--------- */}		
			{/* ---------Start of Call To Action section--------- */}
			<section class="cta">
				<div class="cta-btn">
					<p>Your new home awaits!</p>
					<a href="https://github.com/faahim/nest-tab/raw/master/package/nest-tab.crx">Download Nest Tab Now!</a>
					<p class="warning">If prompt, Click Accept/Add to install the extension.</p>
				</div>
				<div class="credit">
					<p>Made with <i class="material-icons">favorite</i> by <a href="https://twitter.com/faahim01" target="_blank">Fahim</a></p>
				</div>
			</section>
			{/* ---------End of Call To Action section--------- */}			
		</div>
	)
}

export default LandingPage;