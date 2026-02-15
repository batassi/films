import PropTypes from "prop-types";
import { DropdownMenu } from "@radix-ui/themes";

import { DropDownButton, DropDownButtonText } from "./DropDown.Styles";

const propTypes = {
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })).isRequired,
    value: PropTypes.string.isRequired,
};

const DropDown = ({ onSelect, options, value }) => {

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <DropDownButton size="3">
                    <DropDownButtonText>{value?.label || "Genre"}</DropDownButtonText>
                    <DropdownMenu.TriggerIcon />
                </DropDownButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                {options.map((option) => 
                    <DropdownMenu.Item key={option.value} value={option.value} onClick={() => onSelect(option)}>
                        {option.label}
                    </DropdownMenu.Item>
                )}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
};

DropDown.propTypes = propTypes;
export default DropDown;