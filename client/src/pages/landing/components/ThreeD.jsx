import React from "react";
import { MouseEnterProvider } from "../../../context/AppContext";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../component/ui/3d-card";
import Button from "./Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ThreeDCardDemo({ topic, subTopic, para, btn }) {
  return (
    <MouseEnterProvider>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-max lg:h-[400px] rounded-xl p-10 border cursor-pointer">
          <CardItem
            translateZ="50"
            className="text-3xl font-bold text-lwb_black dark:text-white"
          >
            {topic}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {subTopic}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-8">
            <p className="">{para}</p>
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="a"
              href="/instructor"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <Button className="bg-lwb_black px-4 hover:bg-gray-600 text-white hover:text-white flex items-center justify-between h-[48px] group w-full lg:w-[196px]">
                <Link to="/instructor">{btn}</Link>
                <ArrowRight className="group-hover:animate-pulse" />
              </Button>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </MouseEnterProvider>
  );
}
