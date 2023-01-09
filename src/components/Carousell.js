import { Carousel } from 'react-carousel-minimal';

const Carousell = () => {

    const data = [
      {
        image: "https://img.cybercook.com.br/receitas/776/feijoada.jpeg",
        caption: "Feijoada"
      },
      {
        image: "https://receitas.ninja/wp-content/uploads/2021/08/estrogonofe-de-carne.jpg",
        caption: "Beef Stroganoff"
      },
      {
        image: "https://img.taste.com.au/oEH4ChBq/taste/2016/11/vietnamese-lemongrass-beef-noodle-salad-62981-1.jpeg",
        caption: "Vietnamese Beef Noodle"
      },
    ];
  
    const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
    }
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <div style={{
            padding: "0 20px"
          }}>
            <Carousel
              data={data}
              time={1750}
              width="500px"
              height="400px"
              captionStyle={captionStyle}
              radius="10px"
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="black"
              slideImageFit="cover"
              thumbnails={false}
              thumbnailWidth="150px"
              style={{
                textAlign: "center",
                maxWidth: "500px",
                maxHeight: "350px",
                marginBottom: "40px auto",
              }}
            />
          </div>
        </div>
      </div>
   );
}
 
export default Carousell;