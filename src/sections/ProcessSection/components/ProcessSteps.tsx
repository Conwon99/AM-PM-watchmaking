import { ProcessCard } from "@/sections/ProcessSection/components/ProcessCard";

export const ProcessSteps = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard
        imageUrl="/g3.jpeg"
        imageAlt="Watch Inspection"
        title="01. Initial Inspection"
        description="On receipt of the watch, the watch head, clasp and bracelet are initially inspected for external signs of shocks or damage. The case is then carefully opened and inspected for any visible damage, moisture ingress or contaminations."
      />
      <ProcessCard
        imageUrl="/g3.jpeg"
        imageAlt="Watch Disassembly"
        title="02. Disassembly"
        description="The movement is removed from the case and disassembly begins. This involves firstly removing the dial and hands, the movement parts are removed one by one and thoroughly inspected paying close attention to the wheels, jewels, pinions and pivots. Any worn parts are noted and will be replaced during the service."
      />
      <ProcessCard
        imageUrl="/g3.jpeg"
        imageAlt="Watch Cleaning"
        title="03. Ultrasonic Cleaning"
        description="The disassembled movement is carefully placed into segmented cleaning baskets, and put through a multi-stage ultrasonic cleaning machine, which uses industry standard 'L&R' professional ultrasonic cleaning fluids to fully remove all old oils, greases, dirt and any contaminants. The case and bracelet are then dismantled and fully ultrasonically cleaned."
      />
      <ProcessCard
        imageUrl="/g3.jpeg"
        imageAlt="Mainspring Replacement"
        title="04. Mainspring Replacement"
        description="A standard part of our service includes the replacement of the mainspring. Over time mainsprings can lose their strength, shortening the watch's power reserve. Replacing one at each service guarantees a solid power supply and avoids breakages between service intervals."
      />
      <ProcessCard
        imageUrl="/g3.jpeg"
        imageAlt="Watch Reassembly"
        title="05. Reassembly & Oiling"
        description="During assembly all components and wear points are oiled or greased to manufacturer specifications, the primary pivot points and jewels are oiled by industry standard Moebius lubricants. If any worn parts were found on disassembly they will now be replaced with brand new genuine manufacturer parts."
      />
      <ProcessCard
        imageUrl="/g3.jpeg"
        imageAlt="Watch Regulation"
        title="06. Regulation & Testing"
        description="The base timekeeping movement is now fully functional and requires regulation. Its timekeeping is measured using a timegrapher machine, and the watchmaker makes adjustments to get it running within manufacturer specifications. After 24 hours the watch is re-tested and further adjustments are made if necessary."
      />
      <ProcessCard
        imageUrl="/g3.jpeg"
        imageAlt="Power Reserve Testing"
        title="07. Power Reserve & Autowinding"
        description="The watchmaker tests the power reserve of the watch. If the watch has an automatic movement then the autowinding function is tested on our 'Elma' watch-winder, ensuring full automatic winding capabilities are being achieved."
      />
      <ProcessCard
        imageUrl="/g3.jpeg"
        imageAlt="Final Assembly"
        title="08. Casing Up & Final Tests"
        description="The dial and hands are refitted to the movement and the entire assembly is re-cased. All gaskets are checked for wear or damage. The fully assembled watch is subject to final timing and pressure tests to ensure both accuracy and water resistance are within manufacturer tolerances."
      />
    </div>
  );
};
