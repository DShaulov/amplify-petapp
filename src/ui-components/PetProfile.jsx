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
  Flex,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function PetProfile(props) {
  const { pet, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        image: {},
        Name: {},
        Breed: {},
        Age: {},
        Details: {},
        "Button Icon40351722": {},
        label: {},
        "Button Icon40351724": {},
        Button: {},
        PetProfile: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        image: {
          width: "102.34px",
          height: "102.34px",
          border: "2.56px SOLID rgba(191,64,64,1)",
          borderRadius: "102.34349822998047px",
        },
        Name: {
          fontSize: "12.792937278747559px",
          lineHeight: "15.991170883178711px",
        },
        Breed: {
          fontSize: "10.23434829711914px",
          lineHeight: "15.351523399353027px",
          letterSpacing: "0px",
        },
        Age: {
          fontSize: "10.23434829711914px",
          lineHeight: "15.351523399353027px",
          letterSpacing: "0px",
        },
        Details: { gap: "5.11717414855957px" },
        "Button Icon40351722": {
          width: "12.79px",
          height: "12.79px",
          fontSize: "12.79px",
        },
        label: {
          fontSize: "12.792937278747559px",
          lineHeight: "19.18940544128418px",
        },
        "Button Icon40351724": {
          width: "12.79px",
          height: "12.79px",
          fontSize: "12.79px",
        },
        Button: {
          width: "111.3px",
          height: "29.42px",
          border: "0.64px SOLID rgba(0,0,0,0)",
          borderRadius: "2.558587074279785px",
          padding:
            "4.477527379989624px 9.594701528549194px 4.477527379989624px 9.594701528549194px",
        },
        PetProfile: {
          gap: "15.351523399353027px",
          width: "209.8px",
          borderRadius: "15.991170883178711px",
          padding:
            "15.351523399353027px 15.351523399353027px 15.351523399353027px 15.351523399353027px",
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
      gap="24px"
      direction="column"
      width="328px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "PetProfile")}
      {...rest}
    >
      <Image
        width="160px"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        border="4px SOLID rgba(191,64,64,1)"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={pet?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Details")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
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
          children={pet?.name}
          {...getOverrideProps(overrides, "Name")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Breed: "}${pet?.breed}`}
          {...getOverrideProps(overrides, "Breed")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Age: "}${pet?.age}`}
          {...getOverrideProps(overrides, "Age")}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="174px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(191,64,64,1)"
        display="flex"
        {...getOverrideProps(overrides, "Button")}
      >
        <Icon
          width="20px"
          height="20px"
          display="none"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="none"
          fontSize="20px"
          {...getOverrideProps(overrides, "Button Icon40351722")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
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
          children="View Profile"
          {...getOverrideProps(overrides, "label")}
        ></Text>
        <Icon
          width="20px"
          height="20px"
          display="none"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="none"
          fontSize="20px"
          {...getOverrideProps(overrides, "Button Icon40351724")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
