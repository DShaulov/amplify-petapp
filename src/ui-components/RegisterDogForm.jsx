/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import {
  Button,
  Flex,
  Icon,
  Image,
  SelectField,
  StepperField,
  Text,
  TextAreaField,
  TextField,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function RegisterDogForm(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        MyIcon: {},
        "Register Dog": {},
        "Edit Profile": {},
        ProfileImage: {},
        UploadImage: {},
        Profile: {},
        Name: {},
        Breed: {},
        Color: {},
        Age: {},
        Gender: {},
        "Age-Gender Frame": {},
        AboutTextArea: {},
        Forms: {},
        Vector: {},
        "\uD83D\uDD12Icon": {},
        heading: {},
        ErrorBody: {},
        content: {},
        frame: {},
        ErrorMessage: {},
        RegisterBtn: {},
        "Register Buttons": {},
        Content: {},
        RegisterDogForm: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        MyIcon: { width: "13.61px", height: "13.61px" },
        "Register Dog": {
          fontSize: "9.071999549865723px",
          lineHeight: "11.339999198913574px",
        },
        "Edit Profile": { gap: "9.071999549865723px" },
        ProfileImage: {
          width: "90.15px",
          height: "89.59px",
          borderRadius: "90.7199935913086px",
        },
        UploadImage: {
          fontSize: "9.071999549865723px",
          lineHeight: "12.4739990234375px",
        },
        Profile: {
          gap: "9.071999549865723px",
          width: "322.06px",
          height: "89.59px",
        },
        Name: { width: "335.66px", size: "small", gap: "2.2679998874664307px" },
        Breed: {
          width: "335.66px",
          size: "small",
          gap: "2.2679998874664307px",
        },
        Color: {
          width: "335.66px",
          size: "small",
          gap: "2.2679998874664307px",
        },
        Age: {
          width: "143.17px",
          height: "32.89px",
          shrink: "0",
          size: "small",
          gap: "2.2679998874664307px",
        },
        Gender: {
          width: "143.17px",
          height: "32.89px",
          shrink: "0",
          size: "small",
          gap: "2.2679998874664307px",
        },
        "Age-Gender Frame": {
          gap: "34.019996643066406px",
          width: "331px",
          height: "77px",
          padding:
            "5.669999599456787px 5.669999599456787px 5.669999599456787px 5.669999599456787px",
        },
        AboutTextArea: {
          width: "335.66px",
          size: "small",
          gap: "2.2679998874664307px",
        },
        Forms: { gap: "9.071999549865723px", width: "336px", height: "417px" },
        Vector: {
          width: "11.34px",
          height: "11.34px",
          viewBox: {
            minX: 0,
            minY: 0,
            width: 11.34000015258789,
            height: 11.34000015258789,
          },
          paths: [
            {
              d: "M5.67 0C2.54016 0 0 2.54016 0 5.67C0 8.79984 2.54016 11.34 5.67 11.34C8.79984 11.34 11.34 8.79984 11.34 5.67C11.34 2.54016 8.79984 0 5.67 0ZM6.237 8.505L5.103 8.505L5.103 7.371L6.237 7.371L6.237 8.505ZM6.237 6.237L5.103 6.237L5.103 2.835L6.237 2.835L6.237 6.237Z",
              fill: "rgba(102,0,0,1)",
              fillRule: "nonzero",
            },
          ],
          right: "8.34%",
        },
        "\uD83D\uDD12Icon": { width: "13.61px", height: "13.61px" },
        heading: {
          fontSize: "9.071999549865723px",
          lineHeight: "13.607999801635742px",
        },
        ErrorBody: {
          fontSize: "9.071999549865723px",
          lineHeight: "13.607999801635742px",
        },
        content: {},
        frame: { gap: "9.071999549865723px" },
        ErrorMessage: {
          gap: "9.071999549865723px",
          width: "316.39px",
          height: "48.76px",
          padding:
            "6.803999423980713px 9.071999549865723px 6.803999423980713px 9.071999549865723px",
        },
        RegisterBtn: {
          border: "0.57px SOLID rgba(0,0,0,0)",
          borderRadius: "2.2679998874664307px",
          padding:
            "3.9689998030662537px 8.504999577999115px 3.9689998030662537px 8.504999577999115px",
        },
        "Register Buttons": {
          gap: "6.23699951171875px",
          width: "200.16px",
          height: "33.28px",
          padding:
            "5.102999687194824px 72.00900268554688px 5.102999687194824px 72.00900268554688px",
        },
        Content: {
          gap: "13.607998847961426px",
          width: "363px",
          height: "708px",
          padding:
            "13.607998847961426px 13.607998847961426px 13.607998847961426px 13.607998847961426px",
        },
        RegisterDogForm: {
          gap: "9.071999549865723px",
          width: "362px",
          height: "709px",
          borderRadius: "14.174999237060547px",
        },
      },
      variantValues: { breakpoint: "medium" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "medium",
    medium: "medium",
    large: "large",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="987px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="25px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "RegisterDogForm")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="987px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        display="flex"
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
          display="flex"
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
            children="Register Dog"
            {...getOverrideProps(overrides, "Register Dog")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="568px"
          height="158px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="159px"
            height="158px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://amplify-petapp-storage-6f5fa300511cc-staging.s3.eu-north-1.amazonaws.com/public/dog_profile.png"
            {...getOverrideProps(overrides, "ProfileImage")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload Image"
            {...getOverrideProps(overrides, "UploadImage")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="592px"
          height="517px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Name"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Name")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Breed"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Breed")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Color"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Color")}
          ></TextField>
          <Flex
            gap="60px"
            direction="row"
            width="585px"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            backgroundColor="rgba(255,255,255,1)"
            display="flex"
            {...getOverrideProps(overrides, "Age-Gender Frame")}
          >
            <StepperField
              width="unset"
              height="unset"
              label="Age"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "Age")}
            ></StepperField>
            <SelectField
              width="unset"
              height="unset"
              label="Gender"
              justifyContent="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              placeholder=""
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "Gender")}
            ></SelectField>
          </Flex>
          <TextAreaField
            width="unset"
            height="unset"
            label="About"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "AboutTextArea")}
          ></TextAreaField>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="558px"
          height="86px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="12px 16px 12px 16px"
          backgroundColor="rgba(252,233,233,1)"
          display="flex"
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
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
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
              display="flex"
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
          display="flex"
          {...getOverrideProps(overrides, "Register Buttons")}
        >
          <Button
            width="unset"
            height="unset"
            shrink="0"
            backgroundColor="rgba(191,64,64,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Register"
            {...getOverrideProps(overrides, "RegisterBtn")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
