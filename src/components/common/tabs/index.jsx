import styles from "./styles.module.scss";
import CommonButton from '../button/index';

const Tabs = ({
  tabs,
  currentTab,
  customStyle,
  customTabWrapper,
  tab_button_styles,
  tab_button_container
}) => {

  return (
    <ul className={`${styles.container} ${customStyle}`}>
      {tabs.map((tab, index) =>
        tab?.show &&
          <li key={tab + index} className={`${styles.tabWrapper} ${customTabWrapper}`}>
              <CommonButton
                name={tab.label}
                button_styles={`${tab_button_styles}  ${styles.sectionName} ${currentTab === tab.tab
                  ? styles.activeTab
                  : styles.inactiveTab
                  }`}
                button_container_class={tab_button_container}
                type={'button'}
                onClick={tab.handleClick}
              />
          </li >
      )}
    </ul >)
}

export default Tabs;