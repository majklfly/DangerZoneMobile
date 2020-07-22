import React from "react";
import { View, Text, ScrollView, Linking, Image } from "react-native";
import UserBoardContainer from "../UserBoardContainer/UserBoardContainer";

import { AboutScreenStyles as styles } from "./AboutScreenStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const AboutScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>DangerZone</Text>
        <View style={styles.contentContainer}>
          <ScrollView>
            <Text style={styles.content}>
              DangerZone is an open-source free web server created to address
              the need for training food handlers in any type of food production
              facility. Training is split between short courses. Each course
              ends with a quiz. To finish each course anticipate has to answer
              all five questions. After each successfully finished quiz the
              title of the chapter is added to the certificate. Certificate can
              be generated on the website and contains only fully finished
              courses.
            </Text>
            <Text style={styles.content}>
              The content of the courses has been created thanks to the great
              work of extraordinary people in the Food Standard Agency and The
              Royal Society for public health. They managed to establish an
              outstanding source of knowledge for anybody interested in food
              hygiene standards. This project complies with its crown copyright
              policy and open government license for public sector information.
              The content is and will be free of charge. If you are more
              interested in their work, please visit:
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://www.food.gov.uk/")}
            >
              Food Standards Agency
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://www.rsph.org.uk/")}
            >
              Royal Society for public health
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.medicinenet.com/script/main/hp.asp"
                )
              }
            >
              MedicineNet
            </Text>
            <Text style={styles.content}>
              Design of DangerZone has been developed using ReactJS library and
              another work of great amount of contributors cooperating with
              Lottie and Pixabay. Please visit their website and feel free to
              acknowledge their work by donating them as authors of this project
              did.
            </Text>
            <View style={styles.imagesContainer}>
              <TouchableOpacity
                onPress={() => Linking.openURL("https://pixabay.com/")}
              >
                <Image
                  style={styles.picture1}
                  source={{
                    uri:
                      "https://cdn.pixabay.com/photo/2017/01/17/14/44/pixabay-1987090_1280.png",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL("https://lottiefiles.com/")}
              >
                <Image
                  style={styles.picture2}
                  source={{
                    uri: "https://lordicon.com/assets/pictures/lottiefiles.png",
                  }}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
      <UserBoardContainer data-test="swipeContainer" />
    </View>
  );
};

export default AboutScreen;
