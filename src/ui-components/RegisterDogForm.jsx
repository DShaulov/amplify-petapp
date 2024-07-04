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
  Image,
  Text,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
export default function RegisterDogForm(props) {
  const { overrides, ...rest } = props;
  const [nameValue, setNameValue] = useStateMutationAction("");
  const [ageValue, setAgeValue] = useStateMutationAction("");
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
      height="1009px"
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
        width="640px"
        height="1009px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
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
            label="Age"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={ageValue}
            onChange={(event) => {
              setAgeValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "Age")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Gender"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Gender")}
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
          gap="10px"
          direction="row"
          width="unset"
          height="35px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Error Frame")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
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
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Error"
            {...getOverrideProps(overrides, "ErrorMessage")}
          ></Text>
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
