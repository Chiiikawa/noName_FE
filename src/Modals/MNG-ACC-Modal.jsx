import styles from './ModalBasic.module.css';
import React from 'react';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';



function ModalAccManager({ setModalOpen }: PropsType) {
    // 모달 끄기
    const closeACCModal = () => {
        setModalOpen(false);
    };
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
      <div className={styles.modalbox}>
        <div className={styles.modal}>
            <button className={styles.close} onClick={closeACCModal}>
                X
            </button>
            {/*username 정보 서버에서 받앚아주세요! */}
            <p>@username</p>
            <label>Email: </label>
            <input type="Email" />
            <br/>
            <a>Change PassWord?</a>
            <br/>
            <FormControl sx={{ m: 1, width: '30ch'}} variant="filled" size="small">
                      <InputLabel htmlFor="filled-adornment-password">Current Password</InputLabel>
                      <FilledInput
                        id="filled-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
            </FormControl>
              <br/>
            <FormControl sx={{ m: 1, width: '30ch' }} variant="filled" size="small">
                      <InputLabel htmlFor="filled-adornment-password">New Password</InputLabel>
                      <FilledInput
                        id="filled-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
            <br/>
            {/*클릭시 비밀번호 변경으로 함수 써주세용 */}
            <button type="submit">Change Password</button>
            <p>추가정보</p>


        </div>
      </div>
    );
}
export default ModalAccManager;
