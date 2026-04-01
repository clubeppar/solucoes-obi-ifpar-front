let boxex = [
  {
    size: 3,
    h1: "Lista questões",
    p: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    img: "",
  },
  {
    size: 3,
    h1: "Lista questões",
    p: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    img: "",
  },
  {
    size: 2,
    h1: "Lista questões",
    p: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    img: "",
  },
  {
    size: 2,
    h1: "Lista questões",
    p: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    img: "",
  },
  {
    size: 2,
    h1: "Lista questões",
    p: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    img: "",
  },
];

export default function SeeOnPractice() {
  return (
    <>
      <h2 className="text-center text-3xl font-bold">Veja na prática</h2>
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-6 w-7/8">
          {boxex.map((box, index) => (
            <div
              key={index}
              className={`col-span-${box.size} bg-gray-800 m-2 p-4 rounded-lg text-balance`}
            >
              <h3 className="text-xl font-bold">{box.h1}</h3>
              <p>{box.p}</p>
              {box.img && <img src={box.img} alt={box.h1} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
