import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Modal as NextUiModal,
  ModalProps as NextUiModalProps,
} from '@nextui-org/react';

type ModalProps = NextUiModalProps & {
  title: string;
};

export const Modal: React.FC<ModalProps> = (props) => {
  return (
    <NextUiModal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {props.title}
            </ModalHeader>
            <ModalBody>{props.children}</ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Add to cart
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </NextUiModal>
  );
};
