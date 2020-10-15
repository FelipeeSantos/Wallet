import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const ToggleButton = styled.div`
  align-items: center;
  display: flex;
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.color.information,
    offColor: theme.color.warning,
  }))<ReactSwitchProps>`
  margin: 0 0.5rem;
`;
