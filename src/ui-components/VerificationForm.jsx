/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import MyIcon from "./MyIcon";
import {
  Button,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function VerificationForm(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="515px"
      height="344px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="25px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "VerificationForm")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="344px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="We Emailed You"
            {...getOverrideProps(overrides, "We Emailed You")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="452px"
          height="72px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Verification Text Frame")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Your code is on the way. To proceed, enter the code you received. It may take a minute to arrive."
            {...getOverrideProps(
              overrides,
              "Your code is on the way. To proceed, enter the code you received. It may take a minute to arrive."
            )}
          ></Text>
        </Flex>
        <Flex
          gap="5px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Username:"
            placeholder="Enter your code"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Code")}
          ></TextField>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="397px"
          height="56px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="12px 16px 12px 16px"
          backgroundColor="rgba(252,233,233,1)"
          {...getOverrideProps(overrides, "ErrorMessage")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
          >
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15L9 15L9 13L11 13L11 15ZM11 11L9 11L9 5L11 5L11 11Z",
                  fill: "rgba(102,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="8.33%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "frame")}
          >
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "content")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(102,0,0,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Error"
                {...getOverrideProps(overrides, "heading")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(102,0,0,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Error Body"
                {...getOverrideProps(overrides, "ErrorBody")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="11px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="9px 127px 9px 127px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Confirm Resend Frame")}
        >
          <Button
            width="unset"
            height="unset"
            shrink="0"
            backgroundColor="rgba(191,64,64,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Confirm"
            {...getOverrideProps(overrides, "ConfirmBtn")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="default"
            children="Resend"
            {...getOverrideProps(overrides, "ResendBtn")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
