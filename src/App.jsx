import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="flex justify-center items-center bg-black min-h-screen min-w-screen gap-4">
        <Card
        src="https://picsum.photos/id/1018/400/250"
        title="Exploring the Mountains"
        desc="Join us on a journey through breathtaking mountain landscapes and thrilling adventures."
        link="https://www.britannica.com/story/exploring-7-of-earths-great-mountain-ranges"
      />
      <Card
        src="https://picsum.photos/id/1025/400/250"
        title="Into the Wild"
        desc="Discover the beauty of untamed nature and wildlife in this immersive experience."
        link="https://www.junglesafari.in/"
      />
      <Card
        src="https://picsum.photos/id/1035/400/250"
        title="City Lights at Night"
        desc="A visual diary of mesmerizing cityscapes illuminated by night lights."
        link="https://www.pexels.com/search/city%20lights/"
      />
      </div>
    </>
  );
}

export default App;
