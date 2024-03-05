import { Text, View } from "@/components/Themed";
import { bookingStyles } from "@/styles/booking.style";

export default function BookingModal() {
  return (
    <View style={bookingStyles.container}>
      <Text style={bookingStyles.title}>Booking</Text>
      <View
        style={bookingStyles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}
