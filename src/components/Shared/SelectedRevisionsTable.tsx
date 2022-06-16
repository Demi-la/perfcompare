import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { connect } from 'react-redux';

import type { SelectedRevisionsTableHeaders } from '../../types/enums';
import type { Revision, State } from '../../types/state';
import SelectedRevisionsTableRow from './SelectedRevisionsTableRow';

const tableHeaderDetails: SelectedRevisionsTableHeaders[] = [
  'Project',
  'Revision',
  'Author',
  'Commit Message',
  'Timestamp',
];

function SelectedRevisionsTable(props: SelectedRevisionsProps) {
  const { revisions } = props;

  return (
    <TableContainer className="layout">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" />
            {tableHeaderDetails.map((header: SelectedRevisionsTableHeaders) => (
              <TableCell key={header} sx={{ fontWeight: 600 }}>
                {header}
              </TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {revisions.map((row: Revision, index: number) => (
            <SelectedRevisionsTableRow
              key={row.revision}
              row={row}
              index={index}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

interface SelectedRevisionsProps {
  revisions: Revision[];
}

function mapStateToProps(state: State) {
  return {
    revisions: state.selectedRevisions.revisions,
  };
}

export default connect(mapStateToProps)(SelectedRevisionsTable);