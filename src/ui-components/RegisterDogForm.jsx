/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "./utils";
import { Pet } from "../models";
import { schema } from "../models/schema";
import MyIcon from "./MyIcon";
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
} from "@aws-amplify/ui-react";
export default function RegisterDogForm(props) {
  const { overrides, ...rest } = props;
  const [nameValue, setNameValue] = useStateMutationAction("");
  const [ageValue, setAgeValue] = useStateMutationAction(undefined);
  const [breedValue, setBreedValue] = useStateMutationAction("");
  const registerBtnOnClick = useDataStoreCreateAction({
    fields: { name: nameValue, age: ageValue, breed: breedValue },
    model: Pet,
    schema: schema,
  });
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
            value={nameValue}
            onChange={(event) => {
              setNameValue(event.target.value);
            }}
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
            value={breedValue}
            onChange={(event) => {
              setBreedValue(event.target.value);
            }}
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
              value={ageValue}
              onStepChange={(value) => setAgeValue(value)}
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
            onClick={() => {
              registerBtnOnClick();
            }}
            {...getOverrideProps(overrides, "RegisterBtn")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
