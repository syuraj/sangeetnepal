import React from 'react'
import Fade from 'react-reveal/Fade'
import { openModal, closeModal } from '@redq/reuse-modal'
import Text from 'reusecore/src/elements/Text'
import Image from 'reusecore/src/elements/Image'
import Button from 'reusecore/src/elements/Button'
import Heading from 'reusecore/src/elements/Heading'
import Rating from 'common/src/components/Rating'
import Container from 'common/src/components/UI/Container'
import BannerWrapper, {
	BannerContent,
	RatingInfo,
	BannerImage,
	ButtonGroup,
	VideoGroup,
	VideoWrapper
} from './banner.style'

import microsoft from 'common/src/assets/image/appModern/envato-icon.png'
import bannerImg from 'common/src/assets/image/appModern/banner2.png'
import videoBanner1 from 'common/src/assets/image/appModern/video-1.png'
import videoBanner2 from 'common/src/assets/image/appModern/video-2.png'
import circleBorder from 'common/src/assets/image/appModern/shape.svg'
// close button for modal
const CloseModalButton = () => (
	<Button
		className="modalCloseBtn"
		variant="fab"
		onClick={() => closeModal()}
		icon={<i className="flaticon-plus-symbol" />}
	/>
)

const ModalContent = () => (
	<VideoWrapper>
		<iframe title="Video" src="https://www.youtube.com/embed/8ME-QAlW6Ww" frameBorder="0" />
	</VideoWrapper>
)

const Banner = () => {
	// modal handler
	const handleVideoModal = () => {
		openModal({
			config: {
				className: 'video-modal',
				disableDragging: true,
				default: {
					width: 'auto',
					height: 'auto',
					x: 0,
					y: 0
				}
			},
			component: ModalContent,
			componentProps: {},
			closeComponent: CloseModalButton,
			closeOnClickOutside: true
		})
	}
	return (
		<BannerWrapper id="home">
			<Container>
				<BannerContent>
					<Fade up>
						<RatingInfo>
							<Rating rating={4} />
							4.9 of 5 By <img src={microsoft} alt="Microsoft" />
						</RatingInfo>
					</Fade>
					<Fade up delay={100}>
						<Heading as="h1" content="Sangeet Nepal is now available in Google Play Store" />
					</Fade>
					<Fade up delay={200}>
						<Text content="Listen to your favorite Nepalese music artists and earn points" />
					</Fade>
					<Fade up delay={300}>
						<ButtonGroup>
							<Button className="primary" title="Download Now" />
						</ButtonGroup>
					</Fade>
					<VideoGroup>
						<img src={videoBanner1} onClick={handleVideoModal} alt="Microsoft" />
						<img src={videoBanner2} onClick={handleVideoModal} alt="Microsoft" />
					</VideoGroup>
				</BannerContent>
				<BannerImage>
					<Fade up delay={100}>
						<Image src={bannerImg} alt="Banner" />
					</Fade>
				</BannerImage>
			</Container>
			<img className="bannerBottomShape" src={circleBorder} alt="Bottom Circle" />
		</BannerWrapper>
	)
}

export default Banner
