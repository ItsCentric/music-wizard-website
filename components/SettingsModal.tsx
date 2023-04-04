import Modal from './Modal';
import { ModalContext } from '../pages/profile';
import { useContext, useEffect, useRef, useState } from 'react';
import ListSelectElement from './ListSelectElement';
import SpotifySubMenu from './SpotifySubMenu';
import GeneralSubMenu from './GeneralSubMenu';
import axios from 'axios';
import { Preferences } from '../models/User';

export default function SettingsModal() {
  const modal = useContext(ModalContext);
  const [unsavedChanges, setUnsavedChanges] = useState<JSX.Element>(null);
  const [subMenu, setSubMenu] = useState<number>(0);
  const [subMenuProgress, setSubMenuProgress] = useState<Preferences>(null);
  const initialSubMenuProgress = useRef(subMenuProgress);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [currentSubMenu, setCurrentSubMenu] = useState<number>(0);
  const subMenuArray = [
    <GeneralSubMenu key={1} progress={{ value: subMenuProgress, setValue: setSubMenuProgress }} />,
    <SpotifySubMenu key={2} progress={{ value: subMenuProgress, setValue: setSubMenuProgress }} />,
  ];

  useEffect(() => {
    async function fetchPreferences() {
      try {
        const { data } = await axios.get('/api/user/preferences');
        setSubMenuProgress(data.preferences);
        initialSubMenuProgress.current = data.preferences;
      } catch (error) {
        console.error(error);
      }
    }
    fetchPreferences();
  }, []);
  useEffect(() => {
    const isInitial =
      JSON.stringify(subMenuProgress) === JSON.stringify(initialSubMenuProgress.current);
    async function handleFormSubmit() {
      if (isInitial) throw new Error('New preferences can not be the same as old ones');
      try {
        await axios.post('/api/user/preferences', subMenuProgress, {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.error(error);
      }
    }

    if (formSubmitted) {
      handleFormSubmit();
      initialSubMenuProgress.current = subMenuProgress;
      setUnsavedChanges(null);
      setFormSubmitted(false);
    }
    if (!isInitial) {
      setUnsavedChanges(
        <div className='absolute bottom-0 w-full p-4 flex justify-center gap-8 z-[9999] bg-blackRaspberry-600'>
          <p className='text-xl'>You have unsaved changes</p>
          <div className='space-x-2'>
            <button
              className='py-1 px-2 bg-green-light hover:bg-green-dark rounded-lg transition-colors'
              onClick={() => setFormSubmitted(true)}>
              Save
            </button>
            <button
              className='py-1 px-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors'
              onClick={() => setSubMenuProgress(initialSubMenuProgress.current)}>
              Reset
            </button>
          </div>
        </div>
      );
    } else {
      setUnsavedChanges(null);
    }
  }, [formSubmitted, subMenuProgress]);

  if (modal.value === 0) {
    return (
      <>
        {unsavedChanges}
        <Modal
          open={true}
          heading='Settings'
          restricted={
            JSON.stringify(subMenuProgress) !== JSON.stringify(initialSubMenuProgress.current)
          }>
          <div className='grid grid-cols-[1fr,_3fr] gap-4 flex-1 min-h-0'>
            <div className='bg-blackRaspberry-600 rounded-lg'>
              <ul className='flex flex-col items-center p-2 gap-1'>
                {subMenuArray.map((subMenu, index) => {
                  return (
                    <ListSelectElement
                      key={index}
                      handleClick={() => {
                        setSubMenu(index);
                        setCurrentSubMenu(index);
                      }}
                      currentSubMenu={currentSubMenu}
                      index={index}>
                      {subMenu.type.name.split('SubMenu')[0]}
                    </ListSelectElement>
                  );
                })}
              </ul>
            </div>
            <div className='bg-blackRaspberry-600 rounded-lg px-4 py-2 h-0 min-h-full overflow-y-auto'>
              {subMenuArray[subMenu]}
            </div>
          </div>
        </Modal>
      </>
    );
  } else return null;
}
