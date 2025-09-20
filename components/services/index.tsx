import {
  Code,
  Smartphone,
  Globe,
  Paintbrush,
  Rocket,
  Headphones,
} from "lucide-react";
import data from "@/constants/data.json";

const iconMap = {
  Globe: <Globe className="h-6 w-6" />,
  Smartphone: <Smartphone className="h-6 w-6" />,
  Paintbrush: <Paintbrush className="h-6 w-6" />,
  Rocket: <Rocket className="h-6 w-6" />,
  Code: <Code className="h-6 w-6" />,
  Headphones: <Headphones className="h-6 w-6" />,
};

const features = data.services.items.map((item) => ({
  icon: iconMap[item.icon as keyof typeof iconMap],
  title: item.title,
  desc: item.description,
}));

export default function Services() {
  return (
    <section id="services" className="relative pt-24 pb-14">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="relative z-10">
            <h1 className="from-foreground to-foreground/40 mb-4 bg-gradient-to-b bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-6xl">
              {data.services.title}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
              {data.services.subtitle}
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)",
            }}
          ></div>
        </div>

        <hr className="bg-foreground/30 mx-auto mt-5 h-px w-1/2" />

        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="transform-gpu space-y-3 rounded-xl border bg-transparent p-6 [box-shadow:0_-20px_80px_-20px_#ff7aa42f_inset]"
              >
                <div className="text-primary w-fit transform-gpu rounded-full border p-4 [box-shadow:0_-20px_80px_-20px_#ff7aa43f_inset] dark:[box-shadow:0_-20px_80px_-20px_#ff7aa40f_inset]">
                  {item.icon}
                </div>
                <h4 className="font-geist text-lg font-bold tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-500">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
