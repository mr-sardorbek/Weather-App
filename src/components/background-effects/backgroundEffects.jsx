import { CloudEffect, MinstEffect, RainEffect, SnowEffect, SunEffect, ThunderEffect } from "..";


const BackgroundEffects = ({ condition }) => {
  if (!condition) return null;

  const weather = condition.toLowerCase();

  const isRain = weather.includes("rain") || weather.includes("drizzle");
  const isCloud = weather.includes("cloud") || weather.includes("overcast");
  const isSnow = weather.includes("snow") || weather.includes("blizzard");
  const isMist = weather.includes("mist") || weather.includes("fog");
  const isClear = weather.includes("clear") || weather.includes("sun");
  const isThunder = weather.includes("thunder") || weather.includes("storm")
  

  return (
    <>
      {isRain && <RainEffect />}
      {isCloud && <CloudEffect />}
      {isSnow && <SnowEffect />}
      {isMist && <MinstEffect />}
      {isClear && <SunEffect />}
      {isThunder && <ThunderEffect/>}
    </>
  );
};

export default BackgroundEffects;
