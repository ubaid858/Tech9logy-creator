import React, { useState } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/AntDesign';

//styles
import { styles } from 'screens/Home/HomeStyle';
import { DP } from 'global/constants';

//componet
import FocusAwareStatusBar from 'components/FocusAwareStatusBar';
import Header from 'components/Header/Header';
import FoodComponent from 'components/FoodComponent';
import CarouselComponent from 'components/CarouselComponent';
import BenefitComponent from 'components/BenefitComponent';
import CarouselActiveBar from 'components/CarouselActiveBar';
import TopPickComponent from 'components/TopPicksComponent';




const foodData = [
  {
    imageUrl: 'https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png',
    type: 'Food',
    new: false
  },
  {
    imageUrl: 'https://toppng.com/uploads/preview/food-vitamins-and-minerals-11563579429gbtf2ucxky.png',
    type: 'Instamart',
    new: true
  },
  {
    imageUrl: 'https://image.similarpng.com/very-thumbnail/2022/01/Supermarket-delivery-man-wearing-medical-mask-while-holding-food-and-groceries-basket-isolated-on-transparent-background-PNG.png',
    type: 'Genie',
    new: false
  }
];
let carouselData = [
  {
    imageUrl: "https://www.dealsshutter.com/uploads/social_images/stores/swiggy-coupons-social-image-final-1621831150.jpg",
    title: "Explore Now",
    description: "Lorem ipsum donor sit amet, consetetur sadipscing elitr, sed diam nonumy"
  },
  {
    imageUrl: "https://dash.railrestro.com/images/RR_banner_1634810563.webp",
    title: "Shopping",
    description: "Lorem ipsum donor sit amet, consetetur sadipscing elitr, sed diam nonumy"
  },
  {
    imageUrl: "https://cdn.grabon.in/gograbon/images/merchant/1610000375685.png",
    title: "Explore",
    description: "Lorem ipsum donor sit amet, consetetur sadipscing elitr, sed diam nonumy"
  },
];

const topPicksData = [
  {
    url: 'https://miro.medium.com/max/1400/0*NVJkV48k8-as_or6',
    title: 'Premier Chinese Course',
    time: 34,
    off: 60,

  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GSVYOVFXKgqrZbTeBF9-ux816gntR2puKw&usqp=CAU',
    title: 'Om Sweets & Snack available',
    time: 37
  },
  {
    url: 'https://miro.medium.com/max/1400/0*NVJkV48k8-as_or6',
    title: 'Dhingra Z Pasta La Verdict',
    time: 29,
    off: 50
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GSVYOVFXKgqrZbTeBF9-ux816gntR2puKw&usqp=CAU',
    title: 'Premier Chinese Course',
    time: 30,
    off: 60
  },
  {
    url: 'https://miro.medium.com/max/1400/0*NVJkV48k8-as_or6',
    title: 'Premier Chinese Course',
    time: 34,
    off: 60
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GSVYOVFXKgqrZbTeBF9-ux816gntR2puKw&usqp=CAU',
    title: 'Premier Chinese Course',
    time: 34,
    off: 60
  },
]

const HomeScreen = ({ }) => {

  //state
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View style={styles.container}>

      <FocusAwareStatusBar isLightBar={false} isTopSpace={true} isTransparent={true} />

      <Header />
      <BenefitComponent />

      <FlatList
        data={foodData}
        contentContainerStyle={{}}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <FoodComponent item={item} />
          )
        }}
      />

      <Carousel
        data={carouselData}
        renderItem={({ item, index }) => {
          return (
            <CarouselComponent item={item} />
          )
        }}
        sliderWidth={DP(375)}
        itemWidth={DP(315)}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      <CarouselActiveBar item={carouselData} activeSlide={activeSlide} />

      <View style={styles.topPickupTitle}>
        <Icon name='like1' size={15} />
        <Text style={styles.picksTitle}>Top Picks For You</Text>
      </View>

      <FlatList
        data={topPicksData}
        contentContainerStyle={{ paddingRight: DP(10) }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TopPickComponent item={item} />
          )
        }}
      />
    </View>
  )
};

export default HomeScreen;
