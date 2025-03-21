"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import {
  ArrowRightMini,
  BarsThree,
  ShoppingBag,
  ShoppingCart,
  User,
  XMark,
} from "@medusajs/icons"
import { Home } from "lucide-react" // add home icon

import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"

const SideMenuItems = {
  Home: { href: "/", icon: <Home className="w-5 h-5 mr-2" /> },
  Store: { href: "/store", icon: <ShoppingBag className="w-5 h-5 mr-2" /> },
  Account: { href: "/account", icon: <User className="w-5 h-5 mr-2" /> },
  Cart: { href: "/cart", icon: <ShoppingCart className="w-5 h-5 mr-2" /> },
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full px-4 flex items-center gap-2 text-green-900 font-medium hover:text-green-700 transition duration-200"
                >
                  <BarsThree className="w-5 h-5" />
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-x-2"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0 -translate-x-2"
              >
                <PopoverPanel className="absolute top-16 left-0 z-50 w-64 sm:w-72 shadow-md bg-green-100 border border-green-200 rounded-xl m-2">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full justify-between p-4"
                  >
                    {/* Close Button */}
                    <div className="flex justify-end mb-2">
                      <button
                        onClick={close}
                        className="text-green-900 hover:text-green-700 transition"
                        data-testid="close-menu-button"
                      >
                        <XMark className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex flex-col gap-4 mt-2 mb-6">
                      {Object.entries(SideMenuItems).map(
                        ([name, { href, icon }]) => (
                          <li key={name}>
                            <LocalizedClientLink
                              href={href}
                              onClick={close}
                              data-testid={`${name.toLowerCase()}-link`}
                              className="flex items-center text-base font-medium text-green-900 hover:text-green-700 transition"
                            >
                              {icon}
                              {name}
                            </LocalizedClientLink>
                          </li>
                        )
                      )}
                    </ul>

                    {/* Country Select & Footer */}
                    <div className="flex flex-col gap-4 border-t border-green-200 pt-4">
                      <div
                        className="flex items-center justify-between"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-200 text-green-700",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="text-xs text-green-800 text-center">
                        © {new Date().getFullYear()} Medusa Store. All rights
                        reserved.
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
