import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <div className="mx-auto mt-7 w-full max-w-280 px-4">
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-[#571244] px-4 py-10 text-center lg:py-14">
        <p className="text-lg text-white lg:text-xl">
          Want to accelerate professional growth and development at your
          organisation?
          <br />
          See how we can help.
        </p>

        <Button
          variant="outline"
          className="rounded-md border-white  px-6 py-5 bg-white text-[#571244]"
        >
          Book a Consultation
        </Button>
      </div>
    </div>
  );
};

export default CtaBanner;
