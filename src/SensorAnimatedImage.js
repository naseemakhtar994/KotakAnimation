import { useWindowDimensions } from "react-native";
import Animated, {
  useAnimatedSensor,
  SensorType,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from "react-native-reanimated";

const IMAGE_OFFSET = 100;
const PI = Math.PI;
const HALF_PI = PI / 2;

const SensorAnimatedImage = ({ image, order }) => {
  const { width, height } = useWindowDimensions();

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
        { duration: 220 }
      ),
      left: withTiming(
        interpolate(roll, [-PI, PI], [(-IMAGE_OFFSET * 2) / order, 0]),
        {
          duration: 220,
        }
      ),
    };
  });

  return (
    <Animated.Image
      source={image}
      style={[
        {
          width: width + (2 * IMAGE_OFFSET) / order,
          height: height + (2 * IMAGE_OFFSET) / order,
          position: "absolute",
        },
        imageStyle,
      ]}
    />
  );
};

export default SensorAnimatedImage;