import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <div>
      <Menu>
        <MenuButton>
          Options
          <ChevronDownIcon />
        </MenuButton>

        <MenuItems transition anchor="bottom end">
          <MenuItem>
            <button>
              <PencilIcon />
              Edit
              <kbd>⌘E</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button>
              <Square2StackIcon />
              Duplicate
              <kbd>⌘D</kbd>
            </button>
          </MenuItem>
          <div />
          <MenuItem>
            <button>
              <ArchiveBoxXMarkIcon />
              Archive
              <kbd>⌘A</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button>
              <TrashIcon />
              Delete
              <kbd>⌘D</kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
