"use client";

import Spotlight from "./Spotlight";
import Introduction from "./Introduction";
import PaintingOfCategory from "./PaintingOfCategory";
import StatueOfCategory from "./StatueOfCategory";
import Artists from "./Artists";
import ConsultingForm from "./ConsultingForm";

function Homepage() {
  return (
    <main className="min-h-[calc(100svh-150px)] bg-(--art-surface-light) text-(--art-text-primary)">
      <div className="relative overflow-hidden bg-(--art-surface-dark) text-(--art-text-inverse)">
        <Spotlight />
      </div>
      <Introduction />
      <PaintingOfCategory />
      <StatueOfCategory />
      <Artists />
      <ConsultingForm />
    </main>
  );
}

export default Homepage;
