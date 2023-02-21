import Animated, {
  useAnimatedSensor,
  SensorType,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from "react-native-reanimated";

const IMAGE_OFFSET = 30;
const PI = Math.PI;

const AnimatedView = ({  order=1 }) => {
 
  const sensor = useAnimatedSensor(SensorType.ROTATION);

  const imageStyle = useAnimatedStyle(() => {
    const { roll } = sensor.sensor.value;
// Moving image with animation time when mobile rotate left right
    return {
      left: withTiming(
        interpolate(roll, [-PI, PI], [(-IMAGE_OFFSET * 2) / order, 0]),
        {
          duration: 100,
        }
      ),
    };
  });

  return (
    <Animated.View
      style={[
        {
          backgroundColor:'#6730D5',
          height:10,
          width:30,
          marginLeft:50,
          borderRadius:30
        },
        imageStyle,
      ]}
    />
  );
};

export default AnimatedView;