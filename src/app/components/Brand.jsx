import { Box, styled } from '@mui/material';
import { MatxLogo } from 'app/components';
import useSettings from 'app/hooks/useSettings';
import { Span } from './Typography';

const BrandRoot = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: '20px 18px 20px 29px',
    padding: '15px 18px 15px 18px'
}));

const StyledSpan = styled(Span)(({ mode }) => ({
    fontSize: 16,
    marginLeft: '.5rem',
    display: mode === 'compact' ? 'none' : 'block',
    fontWeight: 700
}));

const Brand = ({ children }) => {
    const { settings } = useSettings();
    const leftSidebar = settings.layout1Settings.leftSidebar;
    const { mode } = leftSidebar;

    return (
        <BrandRoot backgroundColor="#2d3859">
            <Box display="flex" alignItems="center">
                <MatxLogo />
                <StyledSpan mode={mode} className="sidenavHoverShow">
                    OWL
                </StyledSpan>
            </Box>
            <Box
                className="sidenavHoverShow"
                sx={{ display: mode === 'compact' ? 'none' : 'block' }}
            >
                {children || null}
            </Box>
        </BrandRoot>
    );
};

export default Brand;
