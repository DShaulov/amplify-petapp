/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBarHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBarHeader")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="690px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767076")}
      >
        <Flex
          gap="15px"
          direction="row"
          width="264px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 438")}
        >
          <View
            width="74px"
            height="69px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Simplification")}
          >
            <Icon
              width="55.45px"
              height="41.64px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 55.44942092895508,
                height: 41.63796615600586,
              }}
              paths={[
                {
                  d: "M27.0418 0.00015073C27.097 0.000100989 27.1522 5.1248e-05 27.209 0C30.6046 0.00483951 33.8919 0.915858 36.3698 3.27311C36.6044 3.50868 36.8162 3.75087 37.0198 4.01231C37.2296 4.28161 37.4483 4.54333 37.6671 4.80564C37.7525 4.90844 37.838 5.01124 37.9235 5.11404C38.1691 5.40916 38.4155 5.70367 38.662 5.99808C39.0064 6.41026 39.3491 6.82373 39.6921 7.237C39.8978 7.48475 40.1035 7.73243 40.3093 7.98012C40.3909 8.07841 40.4725 8.1767 40.5542 8.27499C40.6148 8.34797 40.6148 8.34797 40.6766 8.42243C42.0236 10.0442 42.0236 10.0442 42.1461 10.1917C42.2275 10.2897 42.3089 10.3877 42.3903 10.4857C42.5982 10.736 42.8061 10.9863 43.0139 11.2367C43.3676 11.6629 43.7214 12.089 44.0771 12.5138C44.4757 12.9898 44.872 13.4676 45.2685 13.9453C45.4742 14.1931 45.6799 14.4408 45.8856 14.6884C45.9673 14.7867 46.0489 14.885 46.1305 14.9833C46.1912 15.0563 46.1912 15.0563 46.253 15.1308C47.6 16.7526 47.6 16.7526 47.7225 16.9001C47.8039 16.9981 47.8853 17.0961 47.9667 17.194C48.1746 17.4443 48.3824 17.6946 48.5902 17.945C48.944 18.3712 49.2978 18.7974 49.6535 19.2221C49.7665 19.3573 49.8795 19.4924 49.9926 19.6276C50.0279 19.6697 50.0632 19.7118 50.0995 19.7552C51.0869 20.9338 52.0376 22.1226 52.9057 23.3888C53.0297 23.5676 53.1593 23.7423 53.2894 23.917C55.0573 26.3853 55.797 29.2092 55.2958 32.2011C54.8744 34.4675 53.8579 36.4545 52.2068 38.0999C52.1107 38.1963 52.0169 38.2949 51.9233 38.3937C50.2805 40.0877 48.1002 41.1059 45.7726 41.5218C45.7055 41.5346 45.6385 41.5475 45.5694 41.5607C45.2679 41.6028 44.9735 41.6102 44.6693 41.6131C44.6067 41.6138 44.5441 41.6145 44.4796 41.6153C43.0479 41.6284 41.6778 41.5909 40.2716 41.3006C40.1898 41.2848 40.1081 41.269 40.0238 41.2526C38.6045 40.9763 37.2202 40.592 35.8292 40.2047C32.167 39.1869 28.6452 38.507 24.8329 39.02C24.7438 39.0317 24.6546 39.0433 24.5628 39.0554C23.3409 39.2163 22.1508 39.405 20.9659 39.7446C20.4028 39.9048 19.8367 40.0544 19.2712 40.2058C19.1268 40.2445 18.9825 40.2832 18.8382 40.322C14.7782 41.4123 10.2562 42.5206 6.28584 40.5634C6.21901 40.532 6.15217 40.5005 6.08332 40.4681C3.35368 39.1131 1.45279 36.5237 0.517835 33.737C-0.380826 30.9388 -0.09314 28.2003 1.25109 25.6171C1.58196 25.0066 2.01496 24.4924 2.47254 23.9694C2.6601 23.7522 2.83877 23.5286 3.01725 23.3042C3.08515 23.2194 3.15305 23.1345 3.22095 23.0497C3.28808 22.9656 3.35519 22.8815 3.42229 22.7974C3.85827 22.251 4.29753 21.7079 4.74574 21.171C5.03995 20.8185 5.33022 20.4639 5.61234 20.1021C5.91831 19.7098 6.23124 19.3236 6.54708 18.9389C6.80246 18.6277 7.05604 18.3151 7.30786 18.0012C7.34186 17.9588 7.37587 17.9164 7.4109 17.8727C7.58059 17.661 7.75 17.4492 7.91925 17.2372C8.32937 16.7242 8.74588 16.2169 9.16701 15.7125C9.4805 15.3359 9.78327 14.9526 10.0843 14.5664C10.307 14.2831 10.5383 14.0067 10.7695 13.7301C11.0654 13.3761 11.3575 13.0202 11.6409 12.6566C11.9468 12.2643 12.2598 11.8781 12.5756 11.4934C12.831 11.1821 13.0846 10.8696 13.3364 10.5556C13.3704 10.5132 13.4044 10.4709 13.4394 10.4272C13.6091 10.2155 13.7785 10.0037 13.9478 9.79168C14.317 9.32984 14.6904 8.87192 15.0696 8.41782C15.3638 8.06534 15.6541 7.71073 15.9362 7.34891C16.2843 6.90255 16.6413 6.4637 17.0012 6.0263C17.126 5.87452 17.2496 5.72209 17.3721 5.56845C17.7253 5.12613 18.1065 4.71539 18.4983 4.30603C18.688 4.10763 18.8714 3.90451 19.054 3.69987C21.1191 1.46724 23.9429 0.00265673 27.0418 0.00015073Z",
                  fill: "rgba(1,1,1,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="39.72%"
              bottom="-0.06%"
              left="14.83%"
              right="10.24%"
              {...getOverrideProps(overrides, "Vector3878531")}
            ></Icon>
            <Icon
              width="18.96px"
              height="25.11px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 18.95750617980957,
                height: 25.11353302001953,
              }}
              paths={[
                {
                  d: "M10.1125 0.342824C10.2002 0.374088 10.2879 0.405352 10.3783 0.437563C12.256 1.16621 13.8622 2.63573 15.086 4.17616C15.1335 4.23569 15.1335 4.23569 15.1819 4.29642C17.4384 7.14714 18.9685 10.7106 18.9574 14.3446C18.9574 14.4007 18.9573 14.4568 18.9572 14.5145C18.9481 16.5906 18.4788 18.5795 17.4221 20.3941C17.3972 20.4371 17.3723 20.4801 17.3467 20.5244C17.0174 21.0863 16.6473 21.5986 16.2164 22.0896C16.133 22.1873 16.133 22.1873 16.048 22.2869C14.6728 23.841 12.6259 24.9426 10.5152 25.1054C8.11989 25.1953 5.87866 24.5419 4.07926 22.9558C3.88637 22.7779 3.6979 22.5965 3.51056 22.413C3.41033 22.3151 3.30917 22.218 3.20472 22.1245C1.19911 20.3037 0.16043 17.1405 0.0217925 14.5433C0.0194611 14.4549 0.0171298 14.3666 0.0147278 14.2755C0.0118136 14.1843 0.0118136 14.1843 0.00884057 14.0912C-0.0857967 10.7502 0.575014 7.27398 2.20172 4.31067C2.27349 4.17968 2.34322 4.04763 2.41289 3.91555C2.80935 3.19434 3.30899 2.57988 3.85791 1.96462C3.91531 1.89991 3.97272 1.83519 4.03187 1.76852C5.5845 0.140545 7.97462 -0.435083 10.1125 0.342824Z",
                  fill: "rgba(2,2,2,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="-0.07%"
              bottom="63.67%"
              left="22.89%"
              right="51.49%"
              {...getOverrideProps(overrides, "Vector3878532")}
            ></Icon>
            <Icon
              width="17.95px"
              height="23.54px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 17.950117111206055,
                height: 23.536958694458008,
              }}
              paths={[
                {
                  d: "M13.1121 0.885725C15.8847 2.81709 17.1745 6.27078 17.7256 9.43499C18.2867 12.8849 17.8549 16.4984 15.759 19.412C15.3919 19.906 14.9767 20.3505 14.5439 20.7896C14.49 20.847 14.436 20.9044 14.3805 20.9635C12.8475 22.5503 10.7509 23.3863 8.54861 23.5353C6.63631 23.5742 4.85563 22.9367 3.39111 21.7479C3.29509 21.6721 3.29509 21.6721 3.19713 21.5947C2.34084 20.8846 1.71584 19.9907 1.20578 19.0203C1.17083 18.9547 1.17083 18.9547 1.13517 18.8877C-0.377492 16.0086 -0.238928 12.6706 0.734873 9.65265C1.03178 8.76582 1.38882 7.91561 1.80863 7.07803C1.83795 7.01925 1.86728 6.96046 1.89749 6.89989C2.7324 5.24463 3.81919 3.76405 5.12431 2.4338C5.16446 2.39264 5.20461 2.35148 5.24597 2.30908C5.5534 2.00008 5.8768 1.73154 6.23111 1.47547C6.28379 1.43731 6.33648 1.39915 6.39076 1.35983C8.46934 -0.126026 10.8952 -0.553925 13.1121 0.885725Z",
                  fill: "rgba(2,2,2,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="2.03%"
              bottom="63.86%"
              left="56.42%"
              right="19.33%"
              {...getOverrideProps(overrides, "Vector3878533")}
            ></Icon>
            <Icon
              width="17.09px"
              height="21.73px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 17.085073471069336,
                height: 21.726783752441406,
              }}
              paths={[
                {
                  d: "M11.2169 2.03551C11.4641 2.23474 11.7041 2.44121 11.9425 2.65031C11.9851 2.68743 12.0277 2.72455 12.0716 2.76279C12.5617 3.19153 13.0349 3.62408 13.4497 4.12467C13.5175 4.20396 13.5853 4.28325 13.6531 4.36252C15.9782 7.11012 17.3181 10.395 17.0515 13.987C16.9094 15.3786 16.4896 16.6945 15.7857 17.9099C15.7448 17.9815 15.7039 18.053 15.6618 18.1268C14.6367 19.8029 13.0465 21.0244 11.1136 21.5221C9.13264 22.0068 7.04457 21.6023 5.30226 20.608C2.84198 19.1386 1.23353 16.7026 0.532838 13.9997C-0.362468 10.3645 -0.241926 5.9151 1.76465 2.62813C2.55296 1.39596 3.6173 0.436901 5.09335 0.0886085C7.32684 -0.310666 9.50555 0.69233 11.2169 2.03551Z",
                  fill: "rgba(2,2,2,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="29.06%"
              bottom="39.45%"
              left="-0.05%"
              right="76.96%"
              {...getOverrideProps(overrides, "Vector3878534")}
            ></Icon>
            <Icon
              width="15.02px"
              height="18.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 15.024248123168945,
                height: 18.586009979248047,
              }}
              paths={[
                {
                  d: "M12.0969 0.712247C13.9524 2.12698 14.602 4.36455 14.9098 6.54784C15.2852 9.51268 14.7709 12.8275 12.8643 15.2381C12.6115 15.5439 12.3458 15.8371 12.0736 16.1265C12.0265 16.1778 11.9794 16.2291 11.9309 16.282C10.6961 17.5634 8.7747 18.5014 6.9756 18.5825C5.04398 18.6357 3.43673 18.0848 2.00885 16.7854C0.4848 15.2251 -0.0260157 13.1279 0.00101117 11.025C0.0440796 9.45861 0.532805 7.97214 1.29844 6.60299C1.36991 6.47502 1.43908 6.34584 1.50814 6.21662C2.1224 5.10706 2.91872 4.0916 3.8213 3.19206C3.94025 3.07333 4.0575 2.95311 4.17476 2.83279C6.11638 0.862206 9.41185 -1.08857 12.0969 0.712247Z",
                  fill: "rgba(2,2,2,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="33.57%"
              bottom="39.49%"
              left="79.71%"
              right="-0.02%"
              {...getOverrideProps(overrides, "Vector3878535")}
            ></Icon>
            <Icon
              width="1.96px"
              height="1.84px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 1.9592667818069458,
                height: 1.8429487943649292,
              }}
              paths={[
                {
                  d: "M1.80855 0C1.85829 0.0243269 1.90802 0.0486538 1.95927 0.073718C1.36244 0.657564 0.765621 1.24141 0.150713 1.84295C0.100978 1.81862 0.0512424 1.79429 0 1.76923C0.573332 1.14373 1.16528 0.556764 1.80855 0Z",
                  fill: "rgba(103,103,103,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="43.27%"
              bottom="54.06%"
              left="39.92%"
              right="57.43%"
              {...getOverrideProps(overrides, "Vector3878536")}
            ></Icon>
            <Icon
              width="1.88px"
              height="1.77px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 1.8839105367660522,
                height: 1.769230604171753,
              }}
              paths={[
                {
                  d: "M1.7332 0C1.78293 0.0243269 1.83267 0.0486538 1.88391 0.0737179C1.31196 0.633237 0.74 1.19276 0.150713 1.76923C0.100978 1.7449 0.0512424 1.72058 0 1.69551C0.544894 1.09337 1.09003 0.503344 1.7332 0Z",
                  fill: "rgba(94,94,94,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="4.27%"
              bottom="93.16%"
              left="62.32%"
              right="35.13%"
              {...getOverrideProps(overrides, "Vector3878537")}
            ></Icon>
            <Icon
              width="1.58px"
              height="1.47px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 1.5824848413467407,
                height: 1.4743589162826538,
              }}
              paths={[
                {
                  d: "M1.43177 0C1.48151 0.0243269 1.53124 0.0486538 1.58248 0.0737179C1.11 0.535929 0.637515 0.998141 0.150713 1.47436C0.100978 1.45003 0.0512424 1.42571 0 1.40064C0.453383 0.904121 0.902365 0.42144 1.43177 0Z",
                  fill: "rgba(97,97,97,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="1.5%"
              bottom="96.37%"
              left="27.49%"
              right="70.37%"
              {...getOverrideProps(overrides, "Vector3878538")}
            ></Icon>
            <Icon
              width="1.36px"
              height="1.25px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 1.3564153909683228,
                height: 1.2532051801681519,
              }}
              paths={[
                {
                  d: "M1.2057 0C1.25544 0.0243269 1.30517 0.0486538 1.35642 0.073718C0.958534 0.462949 0.560652 0.85218 0.150713 1.25321C0.100978 1.22888 0.0512424 1.20455 0 1.17949C0.379284 0.753762 0.756382 0.355381 1.2057 0Z",
                  fill: "rgba(98,98,98,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="30.24%"
              bottom="67.95%"
              left="2.95%"
              right="95.21%"
              {...getOverrideProps(overrides, "Vector3878539")}
            ></Icon>
          </View>
          <Text
            fontFamily="Karantina"
            fontSize="30px"
            fontWeight="700"
            color="rgba(92,102,112,1)"
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
            children="Adoptadog"
            {...getOverrideProps(overrides, "Logo Text")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
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
          children="Add Pet"
          {...getOverrideProps(overrides, "Add Pet")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        <View
          width="136px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 437")}
        ></View>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="default"
          children="Sign In"
          {...getOverrideProps(overrides, "SignButton")}
        ></Button>
        <Image
          width="45px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
