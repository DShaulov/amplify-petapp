/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Banner(props) {
  const { src, overrides, ...rest } = props;
  return (
    <View
      width="2617px"
      height="1032px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Banner")}
      {...rest}
    >
      <Icon
        width="1230px"
        height="896px"
        viewBox={{ minX: 0, minY: 0, width: 1230, height: 896 }}
        paths={[
          {
            d: "M537.42 2.10169C645.287 31.7175 525.616 240.001 639.215 251.447C792.279 266.87 905.812 -32.4791 1016.1 50.3348C1127.94 134.306 721.576 248.775 782.766 359.234C839.787 462.166 1104.86 329.491 1212.54 404.932C1275.12 448.778 1154.41 532.733 1087.81 572.948C1019.96 613.914 883.746 571.195 841.53 628.955C790.11 699.308 976.552 856.329 872.403 867.659C740.443 882.015 719.976 648.683 587.099 656.634C470.646 663.603 541.585 920.191 429.828 894.144C312.313 866.754 480.576 689.903 406.807 614.614C362.488 569.382 255.389 682.441 192.909 652.345C144.383 628.97 233.719 564.798 216.43 522.91C198.416 479.267 128.512 460.86 97.6897 421.655C54.8455 367.157 -3.21686 311.369 0.139137 247.79C3.22662 189.299 39.9024 108.876 114.801 97.4848C217.218 81.9084 302.665 209.152 402.828 186.546C491.736 166.479 450.166 -21.8546 537.42 2.10169Z",
            fill: "rgba(191,64,64,1)",
            fillRule: "evenodd",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="35px"
        left="1016px"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
      <Text
        fontFamily="Rubik"
        fontSize="64px"
        fontWeight="400"
        color="rgba(40,60,64,1)"
        lineHeight="74.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="4.01px"
        width="764px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="457px"
        left="324px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Find Your New Best Friend Today"
        {...getOverrideProps(overrides, "Descriptor")}
      ></Text>
      <Icon
        width="1973px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1973, height: 1 }}
        paths={[
          {
            d: "M0 0L1973 0L1973 -8L0 -8L0 0Z",
            stroke: "rgba(242,150,143,1)",
            fillRule: "nonzero",
            strokeWidth: 8,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1041px"
        left="198px"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
      <Image
        width="841px"
        height="1174px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-71px"
        left="1131px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://amplify-petapp-storage-6f5fa300511cc-staging.s3.eu-north-1.amazonaws.com/public/BannerDog.png"
        {...getOverrideProps(overrides, "DogPng")}
      ></Image>
    </View>
  );
}
