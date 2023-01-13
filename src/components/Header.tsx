/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export function Header() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="relative pt-6 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav
            className="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <p>PRODUTO 1 LOGO</p>
                {/* <Image
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  width={600}
                  height={600}
                  className="h-8 w-auto sm:h-10"
                  alt="Workflow"
                /> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
