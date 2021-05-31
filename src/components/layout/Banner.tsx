
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react"
import React, { useRef } from "react";
import { AspectRatio } from "@chakra-ui/react"
import AwesomeSlider from 'react-awesome-slider';
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import 'react-awesome-slider/dist/styles.css';
import fetch from 'isomorphic-unfetch'
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);


const Banner = () => {
    return (
        <AspectRatio ratio={21 / 9} mb={12}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000}
                media={[
                    {
                        source: '/01-banner1.jpg',
                    },
                    {
                        source: '/25ec361d65fc5a1326398e22787dcb0c.jpg',
                    },
                    {
                        source: '/1613358803046.jpg',
                    },
                ]}
            >
            </AutoplaySlider>
            </Box>
        </AspectRatio>
    );
};


export default Banner;
