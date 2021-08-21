import { SortDirection } from "typings"

export type PagePayload = {  page: number }
export type PageSizePayload = {  pageSize: number }
export type SortPayload = {  sortField: string, sortDirection: SortDirection }
export type FilterNamePayload = {  filterName: string| undefined }
export type FilterValuePayload = {  filterValue: string | undefined }
export type StartDatePayload = {  startDate: Date | null }
export type EndDatePayload = {  endDate: Date | null }
export type SelectedUploadProjects = { id: string }
export type ConfigPayload = { config: ListConfig }
export type ImagesPayload = { imagesUrl: Array<string> }

export interface ActionTypePayload<PayloadType, ActionType> {
    type: ActionType;
    payload: PayloadType;
}

export interface ActionTypePure<ActionType> {
    type: ActionType;
}


export interface ListConfig extends PageSizePayload,
    PagePayload, SortPayload, FilterValuePayload, FilterNamePayload {}