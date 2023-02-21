import { View } from "react-native";
import Animated, {
  useAnimatedSensor,
  SensorType,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from "react-native-reanimated";

const IMAGE_OFFSET = 130;
const PI = Math.PI;
const HALF_PI = PI / 2;

const DogAnimatedImage = ({ image, order }) => {
  const { width, height } = {
    width: 296 * 1.5,
    height: 396 * 1.5
  };

  const sensor = useAnimatedSensor(SensorType.ROTATION);

  const imageStyle = useAnimatedStyle(() => {
    const { pitch, roll } = sensor.sensor.value;
// Moving image with animation time when mobile rotate left right top bottom

    return {
      top: withTiming(
        interpolate(
          pitch,
          [-HALF_PI, HALF_PI],
          [(-IMAGE_OFFSET * 2) / order, 0]
        ),
        { duration: 222 }
      ),
      left: withTiming(
        interpolate(roll, [-PI, PI], [(-IMAGE_OFFSET * 2) / order, 0]),
        {
          duration: 222,
        }
      ),
    };
  });

  return (
    <View
      style={{
        width: width,
        height: height,
        justifyContent: 'center'

      }}
    >
      <Animated.Image
        source={image}
        style={[
          {
            width: width + (2 * IMAGE_OFFSET) / order,
            height: height + (2 * IMAGE_OFFSET) / order,
            position: "absolute",
            marginTop: 70,
            marginLeft: 20,
          },
          imageStyle,
        ]}
      />
    </View>
  );
};

export default DogAnimatedImage;