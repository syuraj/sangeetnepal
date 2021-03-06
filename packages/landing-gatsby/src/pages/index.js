import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Modal } from '@redq/reuse-modal'
import { theme } from 'common/src/theme/appModern'
import { ResetCSS } from 'common/src/assets/css/style'
import Sticky from 'react-stickynode'
import Navbar from '../containers/AppModern/Navbar'
import Banner from '../containers/AppModern/Banner'
import AppSlider from '../containers/AppModern/AppSlider'
import Features from '../containers/AppModern/Features'
import ProductSlide from '../containers/AppModern/ProductSlide'
import TeamPortfolio from '../containers/AppModern/TeamPortfoilo'
import Footer from '../containers/AppModern/Footer'
import GlobalStyle, { AppWrapper, ContentWrapper } from '../containers/AppModern/appModern.style'
import '@redq/reuse-modal/es/index.css'

import SEO from '../components/seo'

export default function() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<SEO title="Sangeet-Nepal" />
				<Modal />
				<ResetCSS />
				<GlobalStyle />

				<AppWrapper>
					<Sticky top={0} innerZ={9999} activeClass="sticky-active">
						<Navbar />
					</Sticky>
					<ContentWrapper>
						<Banner />
						<Features />
						<AppSlider />
						<ProductSlide />
						<TeamPortfolio />
					</ContentWrapper>
					<Footer />
				</AppWrapper>
			</>
		</ThemeProvider>
	)
}
