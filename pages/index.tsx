import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";

//Components
import {
	GradientBackgroundCon,
	BackgroundImage1,
	BackgroundImage2,
	FooterCon,
	FooterLink,
	QuoteGeneratorCon,
	QuoteGeneratorInnerCon,
	QuoteGeneratorTitle,
  QuoteGeneratorSubTitle,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

//assets
import Cloud1 from "../assets/cloud-and-thunder.png";
import Cloud2 from "../assets/cloudy-weather.png";

export default function Home() {
	const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
	return (
		<>
			<Head>
				<title>Inspirational Quote Generator</title>
				<meta name="description" content="Project to generate quotes" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Background */}
			<GradientBackgroundCon>
				<BackgroundImage1 src={Cloud1} height="300" alt="cloudybackground1" />
				<BackgroundImage2 src={Cloud2} height="300" alt="cloudybackground1" />
			</GradientBackgroundCon>

			{/* Quote Generator Modal pop-up*/}

			{/* QuoteGenerator */}
			<QuoteGeneratorCon>
				<QuoteGeneratorInnerCon>
					<QuoteGeneratorTitle>Daily Inspiration Generator</QuoteGeneratorTitle>
					<QuoteGeneratorSubTitle>
						Looking for a splash of inspiration? Generate a quote card with a
						random inspirational quote provided by{" "}
						<FooterLink
							href="https://zenquotes.io/"
							target="_blank"
							rel="noopener noreferrer"
						>
							ZenQuotes API
						</FooterLink>
						.
					</QuoteGeneratorSubTitle>
					<GenerateQuoteButton>
						<GenerateQuoteButtonText>
							Make a Quote
						</GenerateQuoteButtonText>
					</GenerateQuoteButton>
				</QuoteGeneratorInnerCon>
			</QuoteGeneratorCon>

			{/* Footer */}
			<FooterCon>
				<>
					Quotes Generated: {numberOfQuotes}
					<br></br>
					Developed by{" "}
					<FooterLink
						href="https://github.com/DanishJain99"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						@DanishJain
					</FooterLink>
				</>
			</FooterCon>
		</>
	);
}
