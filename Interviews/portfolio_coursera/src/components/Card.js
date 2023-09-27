import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack>
      <Box boxSize='sm' bg='white'  borderRadius='lg' overflow='hidden'>
      <Image src={imageSrc} borderRadius='lg'/>
        <Box pl='3'pt='3'>
          <Heading fontSize='sm' color='black'>{title}</Heading>
          <Text mt='2'  fontSize='xs' color='gray.500'>{description}</Text>
          <Text mt='2' fontSize='xs' color='black'>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </Box>
      </Box>
    </VStack>
  );
};

export default Card;
