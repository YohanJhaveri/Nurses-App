import React from "react";

import {
  Flex,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
} from "@chakra-ui/react";

function Sidebar({ title, loading, onClose, isOpen, onSubmit, children }) {
  return (
    <Drawer size="md" placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <Flex align="center" justify="space-between">
            <Flex align="center" gridGap="4px">
              {title}
            </Flex>
            <DrawerCloseButton position="static" />
          </Flex>
        </DrawerHeader>
        <DrawerBody p="25px" bg="#f8f9fa">
          {children}
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button isLoading={loading} loadingText="Saving..." colorScheme="blue" onClick={onSubmit}>
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;
